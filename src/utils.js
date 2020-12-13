const lorem = [
  "Sed aliquet tempus mauris, ac mollis magna semper sit amet. Nunc nulla dolor, sollicitudin et nisi sed, sagittis mattis arcu. Morbi blandit sagittis enim sed ullamcorper.",
  "Vivamus sed consequat massa, at dignissim orci. Mauris nec augue et quam mollis luctus ut vel orci. Vestibulum eget vestibulum metus, et pharetra nibh.",
  "Curabitur non sapien id urna euismod viverra. Pellentesque gravida consectetur justo, in sodales nisi convallis vel.",
  "Proin sollicitudin ultricies mi, quis rutrum neque sollicitudin sit amet. Sed sed suscipit nibh, ultrices tristique risus. Aenean vel rutrum tellus, eu aliquet enim.",
  "Morbi porttitor varius ante id tristique. Nam interdum libero in enim interdum, vehicula iaculis purus bibendum.",
  "In ligula turpis, aliquam sit amet pharetra at, aliquet sed nunc. Suspendisse vel magna felis.",
  "Duis imperdiet porttitor lacus, non euismod nunc consectetur a. Nam laoreet ante nec nisi faucibus, id tristique enim tincidunt.",
  "Donec a elit erat. Nunc magna quam, tempor sed tempus id, maximus vel dui. Maecenas sodales nibh velit, at lobortis nisi condimentum sed.",
  "Etiam pellentesque neque sed accumsan blandit. Quisque posuere ex molestie odio maximus, nec commodo diam condimentum.",
  "Mauris imperdiet gravida orci eget fringilla. Suspendisse eu erat vitae nibh venenatis placerat et vitae arcu.",
  "Cras consequat purus at velit auctor, at sollicitudin leo rhoncus. In eleifend ut ipsum tincidunt bibendum.",
  "Nulla vitae hendrerit odio. Curabitur lectus enim, lobortis sit amet tellus sit amet, fringilla cursus nisl.",
  "Integer finibus luctus lacus, ac iaculis leo cursus sed. Donec ac nibh mi. Ut accumsan, mi vitae feugiat pulvinar, lorem eros cursus tellus, non malesuada turpis nunc nec ligula.",
  "Integer semper, sem nec tempus ullamcorper, odio lacus vehicula leo, at congue massa enim eu quam. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
  "Donec at pharetra dui, ac lacinia risus. Cras convallis risus sed tortor iaculis rhoncus. Quisque lacinia lectus in urna vestibulum, ac ornare neque tincidunt."
];

export function createParagraphs(length) {
  let result = [];
  while (result.length < length) {
    result.push(lorem[Math.floor(Math.random() * lorem.length)]);
  }
  return "<p>" + result.join("</p>\n<p>") + "</p>";
}

const phrase = [
  "Vita brevis ars longa",
  "Ultra posse nemo obligatur",
  "A capite ad calcem",
  "A potiori fit denominatio",
  "A probis probari, ab improbis improbari aequa laus est",
  "Pictoribus atque poetis",
  "Porta itineri longissima",
  "Quid est veritas?",
  "Invia virtuti nulla est via",
  "Aquĭla non captat muscas",
  "Cetĕrum censeo Carthagĭnem esse delendam",
  "Cujusvis homĭnis est errāre; nullīus, sine insipientis, in irrōre perseverāre",
  "Homo sum: humāni nihil a me aliēnum puto",
  "Parturiunt montes, nascētur ridicŭlus mus",
  "Repetitio est mater studiōrum",
  "Virtūtem primam esse puta compescĕre linguam",
  "Vivĕre est militāre",
  "Trahit sua quemque voluptas",
  "Semper homo bonus tiro est",
  "Tertium non datur"
];

export function createPhrase() {
  return phrase[Math.floor(Math.random() * phrase.length)];
}

const words = [
  "Picto",
  "Volens nolens",
  "Urbi et orbi",
  "Ultĭma ratio",
  "Status quo",
  "Vade mecum",
  "Sine irā",
  "Sapienti sat",
  "Quo vadis?",
  "Sub rosā",
  "Aeternitātis",
  "Gloria Mundi",
  "Persōna",
  "Post factum",
  "Post scriptum",
  "Prosit",
  "Panem et Circenses",
  "Qui pro quo",
  "Honōris causā"
];

export function createWord() {
  return words[Math.floor(Math.random() * words.length)];
}
