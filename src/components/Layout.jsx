import Navbar from "./Navbar"

const Layout = ({ children }) => {
    return (
        <div className="body">
            <Navbar />
            {children}
        </div>
    )
}

export default Layout