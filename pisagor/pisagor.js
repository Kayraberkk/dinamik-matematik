var applet1 = new GGBApplet(
  { filename: "pisagor/ggb/ispat1.ggb", showtoolbar: true },
  true
);

var applet2 = new GGBApplet(
  { filename: "pisagor/ggb/ispat2.ggb", showtoolbar: true },
  true
);

var applet3 = new GGBApplet(
  { filename: "pisagor/ggb/ispat3.ggb", showtoolbar: true },
  true
);

var applet4 = new GGBApplet(
  { filename: "pisagor/ggb/ispat4.ggb", showtoolbar: true },
  true
);

var applet5 = new GGBApplet(
  { filename: "pisagor/ggb/ispat5.ggb", showtoolbar: true },
  true
);

var applet6 = new GGBApplet(
  { filename: "pisagor/ggb/ispat6.ggb", showtoolbar: true },
  true
);

var applet7 = new GGBApplet(
  { filename: "pisagor/ggb/ispat7.ggb", showtoolbar: true },
  true
);

window.onload = function () {
  applet1.inject("applet_container1");
  applet2.inject("applet_container2");
  applet3.inject("applet_container3");
  applet4.inject("applet_container4");
  applet5.inject("applet_container5");
  applet6.inject("applet_container6");
  applet7.inject("applet_container7");
};
