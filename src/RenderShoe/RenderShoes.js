import React, { Component } from "react";
import { arrShoes } from "./Databyding";
import ListShoes from "./ListShoes";
export default class RenderShoes extends Component {
  state = {
    dateil: {
      id: 1,
      name: "Adidas Prophere",
      alias: "adidas-prophere",
      price: 350,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 995,
      image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
    },
  };
  chiTietSanPham = (item) => {
    this.setState({ dateil: item });
  };
  renderListShoes = () => {
    return arrShoes.map((item, index) => {
      return (
        <div className="col-4 rounded boder shadow p-2" key={index}>
          <ListShoes item={item} thongTin={this.chiTietSanPham} />
        </div>
      );
    });
  };
  handelShoe = (value) => {
    this.setState({ shoe: value });
  };
  render() {
    return (
      <div>
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Home
            </a>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>

        <h1 className="text-center">Shoes Shop</h1>
        <div className="container">
          <div className="row">{this.renderListShoes()}</div>
          {/* modal */}
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Chi tiết sản phẩm
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <img
                    className="card-img-top btn w-75"
                    src={this.state.dateil.image}
                    alt=""
                  />
                  <div className="card-body">
                    <h3 className="card-title">{this.state.dateil.name}</h3>
                    <h4 className="card-text">{this.state.dateil.price} $</h4>
                    <p className="card-text">{this.state.dateil.description}</p>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Thêm sản phẩm
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="row border m-4 d-flex align-items-center shadow bg-primary-subtle">
            <h1 className="text-center pt-3">THÔNG TIN SẢN PHẨM</h1>
            <div className="col-4">
              <img
                className="card-img-top btn w-100"
                src={this.state.dateil.image}
                alt=""
              />
            </div>
            <div className="col-8 card-body text-lg-start">
              <h3 className="card-title">
                Tên Sản Phẩm: {this.state.dateil.name}
              </h3>
              <h4 className="card-text">Giá: {this.state.dateil.price} $</h4>
              <p className="card-text">
                Thông tin mô tả: {this.state.dateil.description}
              </p>
            </div>
          </div> */}
        </div>
        <footer
          className="text-center text-white"
          style={{ backgroundColor: "#f1f1f1" }}
        >
          <div className="container pt-4">
            <section className="mb-4">
              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i className="fab fa-google" />
              </a>
              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i className="fab fa-instagram" />
              </a>
              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i className="fab fa-linkedin" />
              </a>
              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i className="fab fa-github" />
              </a>
            </section>
          </div>
          <div
            className="text-center text-dark p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2020 Copyright:
            <a className="text-dark" href="https://mdbootstrap.com/">
              MDBootstrap.com
            </a>
          </div>
        </footer>
      </div>
    );
  }
}
