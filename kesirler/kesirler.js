var denk_kesirler1 = new GGBApplet(
  { filename: "/kesirler/ggb/genisletme_denk_kesirler.ggb", showtoolbar: true },
  true
);

var kesir_karolari1 = new GGBApplet(
  { filename: "/kesirler/ggb/kesir_karolari.ggb", showtoolbar: true },
  true
);

var tam_sayili_kesirler1 = new GGBApplet(
  {
    filename: "/kesirler/ggb/tam_sayili_ve_bilesik_kesirler.ggb",
    showtoolbar: true,
  },
  true
);

window.onload = function () {
  denk_kesirler1.inject("applet_denk_kesirler1");
  kesir_karolari1.inject("applet_kesir_karolari1");
  tam_sayili_kesirler1.inject("applet_tam_sayili_kesirler1");
};
