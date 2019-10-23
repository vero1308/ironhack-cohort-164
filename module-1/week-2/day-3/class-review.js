class MusicInstrument {
  constructor(infos) {
    this.name = infos.name;
    this.countryOrigin = infos.country;
    this.hasStrings = infos.hasStrings;
    this.isDrum = infos.isDrum;
    this.hasKeys = infos.hasKeys;
    this.description = infos.descr;
  }
}

const instruments = [];

instruments.push(new MusicInstrument({
    name: "djembé",
    country: "Mali",
    isDrum: true,
    hasStrings: false,
    hasKeys: false,
    descr: "Un djembé est un instrument de percussion africain composé d'un fût de bois en forme de calice sur lequel est montée une peau de chèvre ou d'antilope tendue à l'aide d'un système de tension (originellement des chevilles en bois ou des cordes en peaux, maintenant le plus souvent utilisées sont des cordes synthétiques et des anneaux en fer à béton), que l'on joue à mains nues et dont le spectre sonore très large engendre une grande richesse de timbre. La forme évasée du fût viendrait de celle du mortier à piler le grain.",
}));

console.log(instruments);
