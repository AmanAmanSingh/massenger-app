

const GoogleAd = () => {


    return (
        <div style={{ height: '600px', boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)", overflow: "hidden" }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', background: '#fff', borderRadius: '10px' }}>
                <h2>Check out our book collection</h2>
                <p>We have a wide variety of books for you to choose from.</p>
                <button>Shop Now</button>
            </div>
            <div>
                Remove adds <button>X</button>
            </div>
        </div>
    );
};

export default GoogleAd;
