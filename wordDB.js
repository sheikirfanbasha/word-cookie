var prepositions = "aboard,about,above,across,after,against,along,amid,among,anti,around,as,at,before,behind,below,beneath,beside,besides,between,beyond,but,by,concerning,considering,despite,down,during,except,excepting,excluding,following,for,from,if,in,inside,into,like,minus,near,of,off,on,onto,opposite,outside,over,past,per,plus,regarding,round,save,since,than,through,to,toward,towards,under,underneath,unlike,until,up,upon,versus,via,with,within,without";
var preps = {};
prepositions.split(",").map(item => {
	preps[item] = true;
});

var _pronouns = "it,I,you,he,they,we,she,who,them,me,him,one,her,us,something,nothing,anything,himself,everything,someone,themselves,everyone,itself,anyone,myself";

var pronouns = {};

_pronouns.split(",").map(item => {
	pronouns[item] = true;
});


var _tenses = "breed,bred,bred,beat,beat,beaten,become,became,become,begin,began,begun,bend,bent,bent,bet,bet,bet,bid,bid,bid,bite,bit,bitten,blow,blew,blown,break,broke,broken,bring,brought,brought,build,built,built,burn,burned/burnt,burned/burnt,buy,bought,bought,catch,caught,caught,choose,chose,chosen,come,came,come,cost,cost,cost,cut,cut,cut,dig,dug,dug,dive,dove,dived,do,did,done,draw,drew,drawn,dream,dreamed/dreamt,dreamed/dreamt,drive,drove,driven,drink,drank,drunk,eat,ate,eaten,fall,fell,fallen,feel,felt,felt,fight,fought,fought,find,found,found,fly,flew,flown,forget,forgot,forgotten,forgive,forgave,forgiven,freeze,froze,frozen,get,got,gotten,give,gave,given,go,went,gone,grow,grew,grown,hang,hung,hung,have,had,had,hear,heard,heard,hide,hid,hidden,hit,hit,hit,hold,held,held,hurt,hurt,hurt,keep,kept,kept,know,knew,known,lay,laid,laid,lead,led,led,leave,left,left,lend,lent,lent,let,let,let,lie,lay,lain,lose,lost,lost,make,made,made,mean,meant,meant,meet,met,met,pay,paid,paid,put,put,put,read,read,read,ride,rode,ridden,ring,rang,rung,rise,rose,risen,run,ran,run,say,said,said,see,saw,seen,sell,sold,sold,send,sent,sent,show,showed,shown,shut,shut,shut,sing,sang,sung,sit,sat,sat,sleep,slept,slept,speak,spoke,spoken,spend,spent,spent,stand,stood,stood,swim,swam,swum,take,took,taken,teach,taught,taught,tear,tore,torn,tell,told,told,think,thought,thought,throw,threw,thrown,understand,understood,understood,wake,woke,woken,wear,wore,worn,win,won,won,write,wrote,written";

var tenses = {};
_tenses.split(",").map(item => {
	tenses[item] = true;
});


var _whQues = "why,what,when,how,who,which,whom,where,whose";

var whQues = {};

_whQues.split(",").map(item => {
	whQues[item] = true;
})


var _conjunctions = "And,Or,But,Nor,So,For,Yet,After,Although,As,As If,As Long As,Because,Before,Even If,Even Though,Once,Since,So That,Though,Till,Unless,Until,What,When,Whenever,Wherever,Whether,While";

var conjunctions = {};

_conjunctions.split(",").map(item => {
	item = item.toLowerCase();
	conjunctions[item] = true;
})

module.exports = {
	prepositions: preps,
	pronouns: pronouns,
	tenses: tenses,
	whQues: whQues,
	conjunctions: conjunctions
}