const urls = {
  urlArticles:'http://localhost:3000/api/articles/',
}


const fetchApi = async (url, method, body) => {
  let options = {};

  if (method == "PUT" || method == "POST"){
    options = {
      method,
      headers: { "Content-Type": "application/json" },
      body,
    }
  }else if (method == "DELETE") options = { method };

  try {

    const request = await fetch(url, options);
    const response = await request.json();

    if (!response) {
      return {
        ok: false,
        msg: "Error obteniendo data",
        // response,
      };
    }

    return {
      ok: true,
      data: response, //data:{docs:[art1,art2...],total:_,page:_,pages:_,limit:_}
    };
  } catch (e) {
    console.log("Error obtenniendo data", e);
    return {
      ok: false,
      error,
    };
  }
};

module.exports = { fetchApi };
