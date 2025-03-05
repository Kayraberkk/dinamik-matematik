var dogru_denklemi1 = new GGBApplet(
  { filename: "/dogru_denklemi/ggb/dogru_denklemi.ggb", showtoolbar: true },
  true
);

var dogrunun_egimi1 = new GGBApplet(
  { filename: "/dogru_denklemi/ggb/dogrunun_egimi.ggb", showtoolbar: true },
  true
);

var animasyon1 = new GGBApplet(
  {
    filename: "/dogru_denklemi/ggb/animasyon_egim.ggb",
    showtoolbar: true,
  },
  true
);

window.onload = function () {
  dogru_denklemi1.inject("applet_dogru_denklemi1");
  dogrunun_egimi1.inject("applet_dogrunun_egimi1");
  animasyon1.inject("applet_animasyon1");
};
