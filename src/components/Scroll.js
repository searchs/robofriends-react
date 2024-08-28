const Scroll = (props) => {
    return (
        <div
            style={{
                overflow: 'scroll',
                border: '2px solid #f6f6f6',
                height: '80vh',
                width: '80vw',
                borderRadius: '15px',
                padding: '10px',

            }}
        >
            {props.children}
        </div>
    );
};

export default Scroll;
