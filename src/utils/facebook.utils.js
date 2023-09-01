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
      `https://graph.facebook.com/v17.0/${process.env.REACT_APP_PAGE_ID}/feed?fields=id,permalink_url,created_time,message,full_picture&access_token=${process.env.REACT_APP_FB_ACCESS_TOKEN}`
    );
    return res.data.data;
  } catch (e) {
    console.log(e);
  }
};
