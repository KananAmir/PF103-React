import Card from "../../components/Card"

function HomePage() {
  return (
    <div>
      <h2>HomePage</h2>

      <Card>
        <h2>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h2>
        <p>
          Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday
        </p>
      </Card>

      <hr />
      <Card>
        <h2>
          Mens Casual Premium Slim Fit T-Shirts
        </h2>
        <p>
          Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
          "category": "men's clothing
        </p>
        <span>Price: 22.3</span>
        <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png" alt="" />

      </Card>

      <hr />

    </div>
  )
}

export default HomePage