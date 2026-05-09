import product from "../assets/images/product.jpeg";
import { useRef } from "react";

function BlogSingleCompo() {
  const nameRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    //  setFormData({
    //   name: "",
    //   email: "",
    //   website: "",
    //   message: "",
    // });  
    nameRef.current.focus();
  };
  return (
    <>
      <section className="ftco-section ftco-degree-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 ftco-animate">
              <h2 className="mb-3">Organic foods is good for your health</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.</p>
              <p>
                <img src="images/image_1.jpg" alt="" className="img-fluid" />
              </p>
              <p>Molestiae cupiditate inventore animi, maxime sapiente optio, illo est nemo veritatis repellat sunt doloribus nesciunt! Minima laborum magni reiciendis qui voluptate quisquam voluptatem soluta illo eum ullam incidunt rem assumenda eveniet eaque sequi deleniti tenetur dolore amet fugit perspiciatis ipsa, odit. Nesciunt dolor minima esse vero ut ea, repudiandae suscipit!</p>
              <h2 className="mb-3 mt-5">#2. Creative WordPress Themes</h2>
              <p>Temporibus ad error suscipit exercitationem hic molestiae totam obcaecati rerum, eius aut, in. Exercitationem atque quidem tempora maiores ex architecto voluptatum aut officia doloremque. Error dolore voluptas, omnis molestias odio dignissimos culpa ex earum nisi consequatur quos odit quasi repellat qui officiis reiciendis incidunt hic non? Debitis commodi aut, adipisci.</p>
              <p>
                <img src="images/image_2.jpg" alt="" className="img-fluid" />
              </p>
              <p>Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non tenetur tempore, nisi culpa voluptate maiores officiis quis vel ab consectetur suscipit veritatis nulla quos quia aspernatur perferendis, libero sint. Error, velit, porro. Deserunt minus, quibusdam iste enim veniam, modi rem maiores.</p>
              <p>Odit voluptatibus, eveniet vel nihil cum ullam dolores laborum, quo velit commodi rerum eum quidem pariatur! Quia fuga iste tenetur, ipsa vel nisi in dolorum consequatur, veritatis porro explicabo soluta commodi libero voluptatem similique id quidem? Blanditiis voluptates aperiam non magni. Reprehenderit nobis odit inventore, quia laboriosam harum excepturi ea.</p>
              <p>Adipisci vero culpa, eius nobis soluta. Dolore, maxime ullam ipsam quidem, dolor distinctio similique asperiores voluptas enim, exercitationem ratione aut adipisci modi quod quibusdam iusto, voluptates beatae iure nemo itaque laborum. Consequuntur et pariatur totam fuga eligendi vero dolorum provident. Voluptatibus, veritatis. Beatae numquam nam ab voluptatibus culpa, tenetur recusandae!</p>
              <p>Voluptas dolores dignissimos dolorum temporibus, autem aliquam ducimus at officia adipisci quasi nemo a perspiciatis provident magni laboriosam repudiandae iure iusto commodi debitis est blanditiis alias laborum sint dolore. Dolores, iure, reprehenderit. Error provident, pariatur cupiditate soluta doloremque aut ratione. Harum voluptates mollitia illo minus praesentium, rerum ipsa debitis, inventore?</p>
              <div className="tag-widget post-tag-container mb-5 mt-5">
                <div className="tagcloud">
                  <a href="#" className="tag-cloud-link">Life</a>
                  <a href="#" className="tag-cloud-link">Sport</a>
                  <a href="#" className="tag-cloud-link">Tech</a>
                  <a href="#" className="tag-cloud-link">Travel</a>
                </div>
              </div>

              <div className="about-author d-flex p-4 bg-light">
                <div className="bio align-self-md-center mr-4">
                  <img src="images/person_1.jpg" alt="Image placeholder" className="img-fluid mb-4" />
                </div>
                <div className="desc align-self-md-center">
                  <h3>Lance Smith</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
                </div>
              </div>


              <div className="pt-5 mt-5">
                <h3 className="mb-5">6 Comments</h3>
                <ul className="comment-list">
                  <li className="comment">
                    <div className="vcard bio">
                      <img src="images/person_1.jpg" alt="Image placeholder" />
                    </div>
                    <div className="comment-body">
                      <h3>John Doe</h3>
                      <div className="meta">June 27, 2018 at 2:21pm</div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                      <p><a href="#" className="reply">Reply</a></p>
                    </div>
                  </li>

                  <li className="comment">
                    <div className="vcard bio">
                      <img src="images/person_1.jpg" alt="Image placeholder" />
                    </div>
                    <div className="comment-body">
                      <h3>John Doe</h3>
                      <div className="meta">June 27, 2018 at 2:21pm</div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                      <p><a href="#" className="reply">Reply</a></p>
                    </div>

                    <ul className="children">
                      <li className="comment">
                        <div className="vcard bio">
                          <img src="images/person_1.jpg" alt="Image placeholder" />
                        </div>
                        <div className="comment-body">
                          <h3>John Doe</h3>
                          <div className="meta">June 27, 2018 at 2:21pm</div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                          <p><a href="#" className="reply">Reply</a></p>
                        </div>


                        <ul className="children">
                          <li className="comment">
                            <div className="vcard bio">
                              <img src="images/person_1.jpg" alt="Image placeholder" />
                            </div>
                            <div className="comment-body">
                              <h3>John Doe</h3>
                              <div className="meta">June 27, 2018 at 2:21pm</div>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                              <p><a href="#" className="reply">Reply</a></p>
                            </div>

                            <ul className="children">
                              <li className="comment">
                                <div className="vcard bio">
                                  <img src="images/person_1.jpg" alt="Image placeholder" />
                                </div>
                                <div className="comment-body">
                                  <h3>John Doe</h3>
                                  <div className="meta">June 27, 2018 at 2:21pm</div>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                  <p><a href="#" className="reply">Reply</a></p>
                                </div>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li className="comment">
                    <div className="vcard bio">
                      <img src="images/person_1.jpg" alt="Image placeholder" />
                    </div>
                    <div className="comment-body">
                      <h3>John Doe</h3>
                      <div className="meta">June 27, 2018 at 2:21pm</div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                      <p><a href="#" className="reply">Reply</a></p>
                    </div>
                  </li>
                </ul>


                <div className="comment-form-wrap pt-5">
                  <h3 className="mb-5">Leave a comment</h3>
                  <form onSubmit={handleSubmit} className="p-5 bg-light">

                    <div className="form-group">
                      <label htmlFor="name">Name *</label>
                      <input type="text" className="form-control" id="name" name="name" ref={nameRef} />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input type="email" className="form-control" id="email" name="email" />
                    </div>

                    <div className="form-group">
                      <label htmlFor="website">Website</label>
                      <input type="url" className="form-control" id="website" name="website" />
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        className="form-control"
                        name="message"
                        rows="10"
                      ></textarea>
                    </div>

                    <div className="form-group">
                      <button type="submit" className="btn py-3 px-4 btn-primary">
                        Post Comment
                      </button>
                    </div>

                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-4 sidebar ftco-animate">
              <div className="sidebar-box">
                <form action="#" className="search-form">
                  <div className="form-group">
                    <span className="icon ion-ios-search"></span>
                    <input type="text" className="form-control" placeholder="Search..." />
                  </div>
                </form>
              </div>
              <div className="sidebar-box ftco-animate">
                <h3 className="heading">Categories</h3>
                <ul className="categories">
                  <li><a href="#">Vegetables <span>(12)</span></a></li>
                  <li><a href="#">Fruits <span>(22)</span></a></li>
                  <li><a href="#">Juice <span>(37)</span></a></li>
                  <li><a href="#">Dries <span>(42)</span></a></li>
                </ul>
              </div>

              <div className="sidebar-box ftco-animate">
                <h3 className="heading">Recent Blog</h3>
                <div className="block-21 mb-4 d-flex">
                  <a className="blog-img mr-4" style={{ backgroundImage: `url(${product})` }}></a>
                  <div className="text">
                    <h3 className="heading-1"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                    <div className="meta">
                      <div><a href="#"><span className="icon-calendar"></span> April 09, 2019</a></div>
                      <div><a href="#"><span className="icon-person"></span> Admin</a></div>
                      <div><a href="#"><span className="icon-chat"></span> 19</a></div>
                    </div>
                  </div>
                </div>
                <div className="block-21 mb-4 d-flex">
                  <a className="blog-img mr-4" style={{ backgroundImage: `url(${product})` }}></a>
                  <div className="text">
                    <h3 className="heading-1"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                    <div className="meta">
                      <div><a href="#"><span className="icon-calendar"></span> April 09, 2019</a></div>
                      <div><a href="#"><span className="icon-person"></span> Admin</a></div>
                      <div><a href="#"><span className="icon-chat"></span> 19</a></div>
                    </div>
                  </div>
                </div>
                <div className="block-21 mb-4 d-flex">
                  <a className="blog-img mr-4" style={{ backgroundImage: `url(${product})` }}></a>
                  <div className="text">
                    <h3 className="heading-1"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                    <div className="meta">
                      <div><a href="#"><span className="icon-calendar"></span> April 09, 2019</a></div>
                      <div><a href="#"><span className="icon-person"></span> Admin</a></div>
                      <div><a href="#"><span className="icon-chat"></span> 19</a></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sidebar-box ftco-animate">
                <h3 className="heading">Tag Cloud</h3>
                <div className="tagcloud">
                  <a href="#" className="tag-cloud-link">fruits</a>
                  <a href="#" className="tag-cloud-link">tomatoe</a>
                  <a href="#" className="tag-cloud-link">mango</a>
                  <a href="#" className="tag-cloud-link">apple</a>
                  <a href="#" className="tag-cloud-link">carrots</a>
                  <a href="#" className="tag-cloud-link">orange</a>
                  <a href="#" className="tag-cloud-link">pepper</a>
                  <a href="#" className="tag-cloud-link">eggplant</a>
                </div>
              </div>

              <div className="sidebar-box ftco-animate">
                <h3 className="heading">Paragraph</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default BlogSingleCompo;