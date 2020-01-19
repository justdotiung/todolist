import axios from "axios";

export const getBoxOffice = query =>
  axios.get(
    `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=ce945804e17acb78c4841e57d900ba33&targetDt=${query}`
  );
