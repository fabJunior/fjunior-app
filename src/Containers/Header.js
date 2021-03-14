import { connect } from "react-redux";
import HeaderComponent from "../Components/Header/HeaderComponent";
import { setLocale } from "react-redux-i18n";

const mapStateToProps = (state: State) => ({
  locale: state.i18n.locale
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setLocale: (lang: string) => {
    dispatch(setLocale(lang));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
