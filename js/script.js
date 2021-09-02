console.log("js ok");



const app = new Vue({
  el: "#app",
  data: {
    students
  },
  methods: {
    getMediaVoti(valutazioni) {
      let sum = 0;
      valutazioni.forEach((voto) => {
        sum += voto;
      });
      return (sum / valutazioni.length).toFixed(1)
    },
    getTotalMedia(voti) {
      let allVotes = [];
      for (materia in voti) {
        allVotes = allVotes.concat(voti[materia]);
      }
      return this.getMediaVoti(allVotes);
    },

    isBocciato(voti) {
      return this.getTotalMedia(voti) < 6

    }



  }
});