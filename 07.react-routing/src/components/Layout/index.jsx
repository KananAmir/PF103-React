
const Layout = ({children}) => {
    return (
        <div>
            <header>
                Header section
            </header> 
            <main>
                {children}
            </main>
            <footer>
                Footer section
            </footer>
        </div>
    )
}

export default Layout
