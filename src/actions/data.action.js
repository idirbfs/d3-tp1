import { convertUrl } from "../utils/url-converter";

export const setData = () => async (dispatch) => {
  try {
    const d3 = await import("d3");
    const csvData = await d3.csv(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTtYmVgrVeXnU5KrA45CYHeqstjzPKzT1MRoFmjBqptRkYKgfNnHEqKHqEvv56MuAtTccdkerR43a5g/pub?output=csv"
    );

    csvData.forEach((d) => {
      d["Photo de votre moyen de transport préferé"] = convertUrl(
        d["Photo de votre moyen de transport préferé"]
      );
    });

    const data = [];
    csvData.forEach((d) => {
      data.push({
        photo: d["Photo de votre moyen de transport préferé"],
        nom: d["Nom"],
        prenom: d["Prénom"],
        fonction: d["Fonction"],
        moyenTransport:
          d["Vos moyens de transport pour se rendre à l'université"],
        dureeTrajet:
          d[
            "Quel est le temps nécessaire pour se rendre à l'Université Paris 8 ?"
          ],
        departementResidence: d["Vous résidez dans quel département"],
      });
    });

    console.log(csvData);
    dispatch({
      type: "SET_DATA",
      payload: data,
    });
  } catch (error) {
    console.error(error);
  }
};
