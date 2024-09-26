import { contact } from "./../public/assets/data/contact";
import { education } from "./../public/assets/data/education";
import { experience } from "./../public/assets/data/experience";
import { projects } from "./../public/assets/data/projects";

class DataRepository {
  getData(section) {
    switch (section) {
      case "contact":
        return contact;
      case "education":
        return education;
      case "projects":
        return projects;
      case "experience":
        return experience;
      default:
        return null;
    }
  }
}

export const dataRepository = new DataRepository();
