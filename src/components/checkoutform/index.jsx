import React, { Component } from "react";
import "./style.css";
import logo from "../../assets/images/app_logo.png";
import Footer from "../layout/Footer";

export class CheckoutForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    address: "",
    address2: "",
    country: "",
    state: "",
    zip: "",
    nameOnCard: "",
    creditCard: "",
    expiration: "",
    cvv: "",
  };
  render() {
    return (
      <div class="container">
        <main>
          <div class="py-5 text-center">
            <img
              class="d-block mx-auto mb-4"
              src={logo}
              alt=""
              width="72"
              height="57"
            />
            <h2>Checkout form</h2>
            <p class="lead">Fill the form and Place your order</p>
          </div>

          <div class="row g-5">
            <div class="col-md-7 col-lg-8">
              <h4 class="mb-3">Billing address</h4>
              <form class="needs-validation" novalidate>
                <div class="row g-3">
                  <div class="col-sm-6">
                    <label for="firstName" class="form-label">
                      First name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="firstName"
                      placeholder=""
                      onChange={(e) =>
                        this.setState({ firstName: e.target.value })
                      }
                      required
                    />
                    <div class="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>

                  <div class="col-sm-6">
                    <label for="lastName" class="form-label">
                      Last name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="lastName"
                      placeholder=""
                      onChange={(e) =>
                        this.setState({ lastName: e.target.value })
                      }
                      required
                    />
                    <div class="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>

                  <div class="col-12">
                    <label for="username" class="form-label">
                      Username
                    </label>
                    <div class="input-group has-validation">
                      <span class="input-group-text">@</span>
                      <input
                        type="text"
                        class="form-control"
                        id="username"
                        placeholder="Username"
                        onChange={(e) =>
                          this.setState({ username: e.target.value })
                        }
                        required
                      />
                      <div class="invalid-feedback">
                        Your username is required.
                      </div>
                    </div>
                  </div>

                  <div class="col-12">
                    <label for="email" class="form-label">
                      Email <span class="text-muted">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="you@example.com"
                      onChange={(e) => this.setState({ email: e.target.value })}
                    />
                    <div class="invalid-feedback">
                      Please enter a valid email address for shipping updates.
                    </div>
                  </div>

                  <div class="col-12">
                    <label for="address" class="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="address"
                      placeholder="1234 Main St"
                      onChange={(e) =>
                        this.setState({ address: e.target.value })
                      }
                      required
                    />
                    <div class="invalid-feedback">
                      Please enter your shipping address.
                    </div>
                  </div>

                  <div class="col-12">
                    <label for="address2" class="form-label">
                      Address 2 <span class="text-muted">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="address2"
                      placeholder="Apartment or suite"
                      onChange={(e) => this.setState({ email: e.target.value })}
                    />
                  </div>

                  <div class="col-md-5">
                    <label for="country" class="form-label">
                      Country
                    </label>
                    <select class="form-select" id="country" required>
                      <option value="">Choose...</option>
                      <option>United States</option>
                    </select>
                    <div class="invalid-feedback">
                      Please select a valid country.
                    </div>
                  </div>

                  <div class="col-md-4">
                    <label for="state" class="form-label">
                      State
                    </label>
                    <select class="form-select" id="state" required>
                      <option value="">Choose...</option>
                      <option>California</option>
                    </select>
                    <div class="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>

                  <div class="col-md-3">
                    <label for="zip" class="form-label">
                      Zip
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="zip"
                      placeholder=""
                      onChange={(e) => this.setState({ zip: e.target.value })}
                      required
                    />
                    <div class="invalid-feedback">Zip code required.</div>
                  </div>
                </div>

                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="same-address"
                  />
                  <label class="form-check-label" for="same-address">
                    Shipping address is the same as my billing address
                  </label>
                </div>

                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="save-info"
                  />
                  <label class="form-check-label" for="save-info">
                    Save this information for next time
                  </label>
                </div>

                <h4 class="mb-3">Payment</h4>

                <div class="my-3">
                  <div class="form-check">
                    <input
                      id="credit"
                      name="paymentMethod"
                      type="radio"
                      class="form-check-input"
                      checked
                      required
                    />
                    <label class="form-check-label" for="credit">
                      Credit card
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      id="JazzCash"
                      name="paymentMethod"
                      type="radio"
                      class="form-check-input"
                      required
                    />
                    <label class="form-check-label" for="JazzCash">
                      Jazz Cash{" "}
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      id="EasyPaisa"
                      name="paymentMethod"
                      type="radio"
                      class="form-check-input"
                      required
                    />
                    <label class="form-check-label" for="EasyPaisa">
                      Easy Paisa
                    </label>
                  </div>
                </div>

                <div class="row gy-3">
                  <div class="col-md-6">
                    <label for="cc-name" class="form-label">
                      Name on card
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="cc-name"
                      placeholder=""
                      onChange={(e) =>
                        this.setState({ nameOnCard: e.target.value })
                      }
                      required
                    />
                    <small class="text-muted">
                      Full name as displayed on card
                    </small>
                    <div class="invalid-feedback">Name on card is required</div>
                  </div>

                  <div class="col-md-6">
                    <label for="cc-number" class="form-label">
                      Credit card number
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="cc-number"
                      placeholder=""
                      onChange={(e) =>
                        this.setState({ creditCard: e.target.value })
                      }
                      required
                    />
                    <div class="invalid-feedback">
                      Credit card number is required
                    </div>
                  </div>

                  <div class="col-md-3">
                    <label for="cc-expiration" class="form-label">
                      Expiration
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="cc-expiration"
                      placeholder=""
                      onChange={(e) =>
                        this.setState({ expiration: e.target.value })
                      }
                      required
                    />
                    <div class="invalid-feedback">Expiration date required</div>
                  </div>

                  <div class="col-md-3">
                    <label for="cc-cvv" class="form-label">
                      CVV
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="cc-cvv"
                      placeholder=""
                      onChange={(e) => this.setState({ cvv: e.target.value })}
                      required
                    />
                    <div class="invalid-feedback">Security code required</div>
                  </div>
                </div>

                <button class="w-100 btn btn-primary btn-lg" type="submit">
                  Order Place
                </button>
              </form>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }
}

export default CheckoutForm;
