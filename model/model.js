const pageContent = {
  home: `<div class="home">
        <div class="hero section">
          <div class="title">
            <h1>Header goes here</h1>
            <h2 class="subtitle">Less important text goes here</h2>
          </div>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
            aliquid minus nemo sed est.
          </h2>
          <a href="#about">
            <div class="read-more">Read More</div>
          </a>
        </div>
        <div class="quote section">
          <h2>
            “Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium totam rem aperiam eaque ipsa quae
            ab illo inventore veritatis et quasi architecto beatae vitae dicta
            sunt explicabo. Iste natus error sit voluptatem accusantium
            doloremque laudantium totam rem aperiam eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo”
          </h2>
          <h1>John Smith</h1>
          <h1 class="subtitle">Corporation CEO, books author.</h1>
        </div>
        <div class="events-list section">
          <div class="events-list-content">
            <div class="wide-title light-title">
              UPCOMING EVENTS:
            </div>
            <div class="previews">
              <a href="#blog1">
                <div class="event-preview">
                  <div class="date">
                    <div class="day">06</div>
                    <div class="month">JUN</div>
                  </div>
                  <div class="preview-content">
                    <h3>Sed et persipiatis unde omnis iste natus</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Aliquid temporibus quos aspernatur
                    </p>
                  </div>
                </div>
              </a>
              <a href="#blog2">
                <div class="event-preview">
                  <div class="date">
                    <div class="day">30</div>
                    <div class="month">JUL</div>
                  </div>
                  <div class="preview-content">
                    <h3>Sed et persipiatis unde omnis iste natus</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Aliquid temporibus quos aspernatur
                    </p>
                  </div>
                </div>
              </a>
              <a href="#blog3">
                <div class="event-preview">
                  <div class="date">
                    <div class="day">30</div>
                    <div class="month">AUG</div>
                  </div>
                  <div class="preview-content">
                    <h3>Sed et persipiatis unde omnis iste natus</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Aliquid temporibus quos aspernatur
                    </p>
                  </div>
                </div>
              </a>
              <a href="#blog4">
                <div class="event-preview">
                  <div class="date">
                    <div class="day">23</div>
                    <div class="month">NOV</div>
                  </div>
                  <div class="preview-content">
                    <h3>Sed et persipiatis unde omnis iste natus</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Aliquid temporibus quos aspernatur
                    </p>
                  </div>
                </div>
              </a>
              <a href="#blog5">
                <div class="event-preview">
                  <div class="date">
                    <div class="day">23</div>
                    <div class="month">DEC</div>
                  </div>
                  <div class="preview-content">
                    <h3>Sed et persipiatis unde omnis iste natus</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Aliquid temporibus quos aspernatur
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>`,
  about: `<div class="about">
        <div class="banner">
          <div class="wide-title dark-title">OUR HISTORY:</div>
        </div>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem.
        </p>
      </div>`,
  gallery: `<div class="gallery">
        <div class="wide-title dark-title">GALLERY:</div>
        <div class="grid top">
          <a class="gallery-link g1" href="#gallery1"> </a>
          <a class="gallery-link g2" href="#gallery2"></a>
          <a class="gallery-link g3" href="#gallery3"></a>
        </div>
        <div class="grid bottom">
          <a class="gallery-link g4" href="#gallery4"></a>
          <a class="gallery-link g5" href="#gallery5"></a>
        </div>
      </div>`,
  gallery1: `<div class="gallery-page gallery1">
        <div class="banner">
          <h3><span class="big">1.</span>food festival</h3>
        </div>
        <div class="gallery-body">
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
          </p>
          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </p>
        </div>
      </div>`,
  gallery2: `<div class="gallery-page gallery2">
        <div class="banner">
          <h3><span class="big">2.</span>dee-jay</h3>
        </div>
        <div class="gallery-body">
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
          </p>
          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </p>
        </div>
      </div>`,
  gallery3: `<div class="gallery-page gallery3">
        <div class="banner">
          <h3><span class="big">3.</span>speech</h3>
        </div>
        <div class="gallery-body">
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
          </p>
          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </p>
        </div>
      </div>
`,
  gallery4: `<div class="gallery-page gallery4">
        <div class="banner">
          <h3><span class="big">4.</span>open foodfest</h3>
        </div>
        <div class="gallery-body">
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
          </p>
          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </p>
        </div>
      </div>
`,
  gallery5: `<div class="gallery-page gallery5">
        <div class="banner">
          <h3><span class="big">5.</span>international</h3>
        </div>
        <div class="gallery-body">
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
          </p>
          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </p>
        </div>
      </div>`,
  blog: `<div class="blog">
        <div class="wide-title dark">BLOG:</div>
        <div class="blog-posts">
          <a href="#blog1">
            <div class="event-preview">
              <div class="date">
                <div class="day">06</div>
                <div class="month">JUN</div>
              </div>
              <div class="preview-content">
                <img src="./images/blog.jpg" alt="" />
                <h3>Sed et persipiatis unde omnis iste natus</h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>
              </div>
            </div>
          </a>
          <a href="#blog2">
            <div class="event-preview">
              <div class="date">
                <div class="day">30</div>
                <div class="month">JUL</div>
              </div>
              <div class="preview-content">
                <img src="./images/blog.jpg" alt="" />
                <h3>Sed et persipiatis unde omnis iste natus</h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>
              </div>
            </div>
          </a>
          <a href="#blog3">
            <div class="event-preview">
              <div class="date">
                <div class="day">30</div>
                <div class="month">AUG</div>
              </div>
              <div class="preview-content">
                <img src="./images/blog.jpg" alt="" />
                <h3>Sed et persipiatis unde omnis iste natus</h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>
              </div>
            </div>
          </a>
          <a href="#blog4">
            <div class="event-preview">
              <div class="date">
                <div class="day">23</div>
                <div class="month">NOV</div>
              </div>
              <div class="preview-content">
                <img src="./images/blog.jpg" alt="" />
                <h3>Sed et persipiatis unde omnis iste natus</h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>
              </div>
            </div>
          </a>
          <a href="#blog5">
            <div class="event-preview">
              <div class="date">
                <div class="day">23</div>
                <div class="month">DEC</div>
              </div>
              <div class="preview-content">
                <img src="./images/blog.jpg" alt="" />
                <h3>Sed et persipiatis unde omnis iste natus</h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>`,
  blog1: `<div class="blog-post blog1">
        <div class="banner">
          <div class="date">
            <div class="day">06</div>
            <div class="month">JUN</div>
          </div>
        </div>
        <h3>Header #1:</h3>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.
        </p>
        <p>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
        <h3>Header #2:</h3>
        <p>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>`,
  blog2: `<div class="blog-post blog1">
        <div class="banner">
          <div class="date">
            <div class="day">30</div>
            <div class="month">JUL</div>
          </div>
        </div>
        <h3>Header #1:</h3>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.
        </p>
        <p>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
        <h3>Header #2:</h3>
        <p>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>`,
  blog3: `<div class="blog-post blog1">
        <div class="banner">
          <div class="date">
            <div class="day">30</div>
            <div class="month">AUG</div>
          </div>
        </div>
        <h3>Header #1:</h3>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.
        </p>
        <p>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
        <h3>Header #2:</h3>
        <p>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>`,
  blog4: `<div class="blog-post blog1">
        <div class="banner">
          <div class="date">
            <div class="day">23</div>
            <div class="month">NOV</div>
          </div>
        </div>
        <h3>Header #1:</h3>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.
        </p>
        <p>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
        <h3>Header #2:</h3>
        <p>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>`,
  blog5: `<div class="blog-post blog1">
        <div class="banner">
          <div class="date">
            <div class="day">23</div>
            <div class="month">DEC</div>
          </div>
        </div>
        <h3>Header #1:</h3>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.
        </p>
        <p>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
        <h3>Header #2:</h3>
        <p>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>`,
  contact: `<div class="contact">
        <div class="wide-title dark-title">CONTACT US:</div>
        <div class="contact-content">
          <div class="contact-form">
            <input type="text" placeholder="Your Name..." />
            <input type="text" placeholder="Email Address..." />
            <input type="text" placeholder="Company..." />
            <textarea placeholder="Message..."></textarea>
          </div>
          <img src="./images/map.jpg" alt="" />
        </div>
        <a href="#">
          <div class="button">SEND MESSAGE</div>
        </a>
      </div>`,
};

export function loadData(pageID) {
  const app = document.querySelector("#app");
  app.innerHTML = pageContent[pageID] || `<p>whuh oh</p>`;
}
