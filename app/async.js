exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    return new Promise(function (resolve, reject) {
      resolve(value);     
    });
  },

  manipulateRemoteData : function(url) {
    return fetch(url, {
        method:"GET"
    }).then(function(response) {
        if(response.ok){
          return response.json();
        }        
    }).then(function(data) {
        var people = data.people;
        var result = [];
        people.map(function(a){
          result.push(a.name);
        })
        return result.sort();
    })
  }
};
