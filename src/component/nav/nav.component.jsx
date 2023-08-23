import "./nav.styles.scss";

const Nav = () => {
  let isNavShrunk = false;
  window.addEventListener("scroll", function () {
    const navigation = document.querySelector(".navigation");
    if (window.scrollY > 100 && !isNavShrunk) {
      navigation.classList.add("shrink");
      isNavShrunk = true;
    } else if (window.scrollY <= 100 && isNavShrunk) {
      navigation.classList.remove("shrink");
      isNavShrunk = false;
    }
  });

  return (
    <div class="navigation">
      <div class="logo-container">
        <div className="logo"></div>
      </div>
      <ul class="menu">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">News</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
