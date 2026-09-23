var worlds = [{totalSheepFound:0},{totalSheepFound:1},{totalSheepFound:2}]
var utterances = ["I found one of the sheep", "I found both of the sheep"]

var meaning = function(utterance, world){
  (utterance === "I found one of the sheep") && (world['totalSheepFound']==1)  ? true :
  (utterance === "I found both of the sheep") && (world['totalSheepFound']==2)  ? true :
  false}

var l0 = function(utterance){
  Infer({model: function(){
    var world = uniformDraw(worlds);
    condition(meaning(utterance, world))
    return world}})}

var s1 = function(world){
  Infer({model: function(){
    var utterance = uniformDraw(utterances)
    factor(l0(utterance).score(world))
    return utterance}})}

// pragmatic listener
var pragmaticListener = function(utterance){
  Infer({model: function(){
    var world = uniformDraw(worlds)
    factor(s1(world).score(utterance))
    return world }})}

print("literal listener's interpretation of first utterance:")
viz.table(literalListener("I found one of the sheep"))
print("speaker's utterance distribution for a blue circle:")
viz.table(speaker({shape:"circle", color: "blue"}))
print("pragmatic listener's interpretation of first utterance:")
viz.table(pragmaticListener("I found both of the sheep"))
