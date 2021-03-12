import { connect } from "react-redux";
import HomeComponent from "../Components/Home/HomeComponent";
import { setLocale } from "react-redux-i18n";

const mapStateToProps = (state: State) => ({
  locale: state.i18n.locale
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setLocale: (lang: string) => {
    dispatch(setLocale(lang));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
