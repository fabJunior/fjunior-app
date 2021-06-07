// External
import { connect } from "react-redux";
// Ours
import ExperiencesProComponent from "../Components/ExperiencesPro/ExperiencesProComponent";

const mapStateToProps = state => ({
  translations: state.i18n.translations,
  locale: state.i18n.locale
});

export default connect(mapStateToProps)(ExperiencesProComponent);
