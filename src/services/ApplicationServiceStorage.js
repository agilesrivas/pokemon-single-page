let pack = [];


 function getStorage() {
  if (window.localStorage.getItem('pack') != null) {
    pack = JSON.parse(window.localStorage.getItem('pack'));
  } else {
    pack = [];
  }
}
function setStorage(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
}
export default {
  getAll() {
      return new Promise((resolve) => {
            setTimeout(
              () => {
                getStorage();
                resolve(pack);
              }, Math.random() * 2000 + 600);
          });
    },
  getOne(id) {
      return new Promise((res, rej) => {
        try {
          setTimeout(
              () => {
         getStorage();
          res(pack.find(card => card.id === id));
      });
        } catch(e) {
          rej(e.toString());
        }
      })
  },
  create(poke) {
      return new Promise((res,rej)=>{
         
          try{
              setTimeout(
                  () => {
              getStorage();
              pack.push(poke);
              setStorage('pack', pack);
              res("The pokemon is Okey");
          })
          }catch(e){
              rej(e.toString);
          }
      },1000)
  },
}