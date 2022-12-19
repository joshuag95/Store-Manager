import logo from "./assets/flatApple-logo.png"

export default function Home() {

    return (
        <div className="wrapper">
            <img src={logo} className='logo'/>
            <h1>Welcome to Flatapple's Inventory Management Tool</h1>
            <h2>Click on "Stores" to navigate through all Flatapple store locations</h2>
        </div>
    )

}
