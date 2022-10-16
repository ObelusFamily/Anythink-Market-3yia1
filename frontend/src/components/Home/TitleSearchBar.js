import { connect } from "react-redux";
import agent from "../../agent";
import { APPLY_TITLE_FILTER } from "../../constants/actionTypes";

const mapStateToProps = (state) => ({
  ...state,
  title: state.itemList?.title || "",
});

const mapDispatchToProps = (dispatch) => ({
  onSearch: (title, pager, payload) =>
    dispatch({ type: APPLY_TITLE_FILTER, title, pager, payload }),
});

const TitleSearchBar = (props) => {
  const onChange = (ev) => {
    ev.preventDefault();
    const { value: title } = ev.target;
    if (title.length >= 3 || title.length < props.title.length) {
      props.onSearch(
        title,
        (page) => agent.Items.byTitle(title, page),
        agent.Items.byTitle(title)
      );
    }
  };

  return (
    <span className="input-group w-50 mx-2 form-inline d-inline-flex">
      <input
        className="form-control py-2 border-right-0 border"
        type="search"
        placeholder="search"
        id="search-box"
        onChange={onChange}
      />
      <span className="input-group-append">
        <div className="input-group-text bg-white">
          <i className="fa fa-search"></i>
        </div>
      </span>
    </span>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TitleSearchBar);
