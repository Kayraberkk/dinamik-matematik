const host =
  location.hostname === "localhost" || location.hostname === "127.0.0.1"
    ? "/"
    : "/dinamik-matematik/";

const base = "https://kayraberkk.github.io/dinamik-matematik/";

const baseTag = document.getElementById("baseTag");

function changeBaseTag() {
  if (location.hostname != "localhost" && location.hostname != "127.0.0.1" && baseTag != null) {
    baseTag.href = base;
  }
}

changeBaseTag();

var html = `<ul  class="nav-links">
        <li>
          <a href="${host}">
            <i class="bx bx-grid-alt"></i>
            <span class="link_name">Anamenü</span>
          </a>
        </li>

        <!-- Menü Başlangıcı -->

        <!-- Pisagor -->
        <li>
          <div class="icon-link">
            <a href="#">
              <img
                src="${host}assets/pisagor_cropped.jpg"
                alt="pisagor"
                class="menuIcon bx bx-collection"
              />
              <span class="link_name">Pisagor</span>
            </a>
            <i class="bx bxs-chevron-down arrow"></i>
          </div>
          <ul class="sub-menu">
            <li><a class="link_name" href="#">Category</a></li>
            <li><a href="${host}pisagor/hayati.html">Hayatı</a></li>
            <li><a href="${host}pisagor/mezrada.html">Mezrada Pisagor</a></li>
            <li><a href="${host}pisagor/ispatlar.html">İspatları</a></li>
          </ul>
        </li>

        <!-- Tam Sayılar ve Bileşik Kesir -->
        <li>
          <div class="icon-link">
            <a href="${host}kesirler/index.html">
              <img
                src="${host}assets/tam_sayilar_icon.png"
                alt="pisagor"
                class="menuIcon bx bx-collection"
              />
              <span class="link_name">Tam Sayılar ve Bileşik Kesir</span>
            </a>
            <i class="bx bxs-chevron-down arrow"></i>
          </div>
          <ul class="sub-menu">
            <li>
              <a class="link_name" href="${host}kesirler/index.html">Category</a>
            </li>
            <li><a href="${host}kesirler/denk_kesirler.html">Denk Kesirler</a></li>
            <li><a href="${host}kesirler/kesir_karolari.html">Kesir Karoları</a></li>
            <li><a href="${host}kesirler/tam_sayili_kesirler.html">Tamsayılı Kesirler</a></li>
          </ul>
        </li>


         <!-- Doğru Denklemi -->
        <li>
          <div class="icon-link">
            <a href="${host}dogru_denklemi/index.html">
              <img
                src="${host}assets/linear.png"
                alt="pisagor"
                class="menuIcon bx bx-collection"
              />
              <span class="link_name">Doğru Denklemi</span>
            </a>
            <i class="bx bxs-chevron-down arrow"></i>
          </div>
          <ul class="sub-menu">
            <li>
              <a class="link_name" href="${host}dogru_denklemi/index.html">Category</a>
            </li>
            <li><a href="${host}dogru_denklemi/dogrunun_denklemi.html">Doğrunun Denklemi</a></li>
            <li><a href="${host}dogru_denklemi/dogrunun_egimi.html">Doğrunun Eğimi</a></li>
            <li><a href="${host}dogru_denklemi/animasyon.html">Animasyon</a></li>
          </ul>
        </li>

        <!-- Menü Bitişi -->
      </ul>`;

document.getElementById("nav").innerHTML = html;

console.log("host", host);
