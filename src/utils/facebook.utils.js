import axios from "axios";

export const initFacebookSdk = () => {
  return new Promise((resolve) => {
    // wait for facebook sdk to initialize before starting the react app
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: process.env.REACT_APP_ID,
        cookie: true,
        xfbml: true,
        version: "v8.0",
      });
    };
    resolve();
  });
};

export const getPostsFromFacebook = async () => {
  try {
    const res = await axios.get(
      `https://graph.facebook.com/v17.0/${process.env.REACT_APP_PAGE_ID}/feed?fields=id,permalink_url,created_time,message,full_picture,story&access_token=${process.env.REACT_APP_FB_ACCESS_TOKEN}`
    );
    return res.data.data;
  } catch (e) {
    console.log(e);
  }
};

export const getEventsFromPosts = async () => {
  const allPosts = await getPostsFromFacebook();
  const eventPosts = allPosts.filter((post) => {
    return (
      post.story ===
      "Jardinieres masquées de Toursさんがイベントを作成しました。"
    );
  });

  const event_ids = [];
  eventPosts.forEach((post) => {
    event_ids.push(post.id.split("_")[1]);
  });

  const responses = event_ids.map((event_id) =>
    axios.get(
      `https://graph.facebook.com/v17.0/${event_id}?fields=id,name,cover,place,description&access_token=${process.env.REACT_APP_FB_ACCESS_TOKEN}`
    )
  );

  const response = await Promise.all([...responses]);

  const result = response.map((res, idx) => {
    const obj = { ...res.data, permalink_url: eventPosts[idx].permalink_url };
    return obj;
  });
  return result;
};
