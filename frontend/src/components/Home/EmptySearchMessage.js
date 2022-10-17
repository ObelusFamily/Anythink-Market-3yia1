const EmptySearchMessage = (props) => {
    return (
        <div className="py-4 no-items flex center" id="empty">
            No items found for "{props.search}".
        </div>
    );
};

export default EmptySearchMessage;
