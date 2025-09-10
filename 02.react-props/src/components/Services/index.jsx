import "./index.css"

function Services() {
    const services = [
        {   
            id: "1",
            title: "Web Development",
            description: "Modern, responsive websites built with the latest technologies",
            icon: "🌐"
        },
        {
            id: "2",
            title: "Mobile Apps",
            description: "Native and cross-platform mobile applications",
            icon: "📱"
        },
        {
            id: "3",
            title: "UI/UX Design",
            description: "Beautiful, user-friendly interfaces that convert",
            icon: "🎨"
        },
        {
            id: "4",
            title: "Consulting",
            description: "Strategic technology consulting for your business",
            icon: "💡"
        }
    ];

    return (
        <section id="services">
            {/* <ul>
                {services.map((service) => {
                    return (<li>{service.title}</li>)
                })}
            </ul> */}

            <div className="container">
                <div className="services">
                    {services.map((item)=>{
                        return (
                            <div className="card" key={item.id}>
                                <span className="icon">{item.icon}</span>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            
        </section>
    )
}

export default Services