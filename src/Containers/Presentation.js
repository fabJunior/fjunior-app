// External
import { connect } from "react-redux";
// Ours
import PresentationComponent from "../Components/Presentation/PresentationComponent";

const mapStateToProps = state => ({
  translations: state.i18n.translations,
  locale: state.i18n.locale
});

export default connect(mapStateToProps)(PresentationComponent);
