// UTF8-Zeichen öäüðý

/**
 * Partei-Informationen
 *
 * Aus Thesen-CMS ausgespielt fuer Wahl-o-mat 7525
 *
 * 1.0.0        03.09.2021 16:54:50 Wahl-O-Mat
 *
 * @category    Bpb
 * @package     Wahl-O-Mat
 * @subpackage  CMS-Definitionen-Statements
 * @copyright   Bundeszentrale fuer politische Bildung
 */

/*
  --------------------------------------------------------------
  Vordefinieren der in den Templates gefunden assoziativen Keys
  mit denenen auf WOMT_aTexte und WOMT_aBilder zugriffen wird
  nicht vorhanden Indexe fuehren in Javascript sonst zu Fehlern!

  Wenn mit Variablen auf die assoziativen Arrays zugegriffen wird
  kann dies nicht automatisch analsysit werden,
  die Variablen werden aber zur Erinnuner im output angezeigt!
  --------------------------------------------------------------
*/
var WOMT_gExportUtf8 = 1;
var WOMT_aTexte = new Array();
var WOMT_aBilder = new Array();
var WOMT_nParteien = 0;
var WOMT_nThesen = 0;
var WOMT_nThemen = 0;
var WOMT_aSprachen_ID2Bez = new Array();
var WOMT_aSprachen_ID2Langcode = new Array();

var WOMT_aSprachen_ID2N = new Array();
var WOMT_aSprachen_N2ID = new Array();
var WOMT_aParteien_ID2N = new Array();
var WOMT_aParteien_N2ID = new Array();
var WOMT_aThesen_ID2N = new Array();
var WOMT_aThesen_N2ID = new Array();
var WOMT_aThemen_ID2N = new Array();
var WOMT_aThemen_N2ID = new Array();
var WOMT_aThesen = new Array();
var WOMT_aThesenLinks = new Array();
var WOMT_aThesenVotematch = new Array();
var WOMT_aThesenVotematchId = new Array();
var WOMT_aThesenBilder = new Array();
var WOMT_aThesenThema = new Array();
var WOMT_aParteienURL = new Array();
var WOMT_aParteienFix = new Array();
var WOMT_aParteienLogos = new Array();
var WOMT_aParteienLogos2 = new Array();
var WOMT_aParteienLogos3 = new Array();
var WOMT_aParteienLogos4 = new Array();
var WOMT_aParteien = new Array();
var WOMT_aParteienChecksum = new Array();
var WOMT_aParteiFix = new Array();
var WOMT_aThemen = new Array();
var WOMT_aThesenParteien = new Array();
var WOMT_sCheckSumImport = "";
var WOMT_sCheckSumExport = "";
var WOMT_sGenerationTimeTexte = "";
var WOMT_sCheckSumTexte = new Array();
//var WOMT_sCheckSumTexteMD5 = new Array();
//var WOMT_sCheckSumTexteKey = new Array();
var WAHLOMATEN_ID = 1;
var WOMT_sGenerationTime = "";

WAHLOMATEN_ID = 7525;

WOMT_aSprachen_ID2Bez[1] = "de";
WOMT_aSprachen_ID2Langcode[1] = "de";
WOMT_nParteien = 38;
WOMT_nThesen = 38;
WOMT_nThemen = 1;
WOMT_aSprachen_N2ID[0] = "1";
WOMT_aSprachen_ID2N[1] = "0";
WOMT_aParteien_N2ID[0] = "14661";
WOMT_aParteien_ID2N[14661] = "0";
WOMT_aParteien_N2ID[1] = "7530";
WOMT_aParteien_ID2N[7530] = "1";
WOMT_aParteien_N2ID[2] = "7531";
WOMT_aParteien_ID2N[7531] = "2";
WOMT_aParteien_N2ID[3] = "7532";
WOMT_aParteien_ID2N[7532] = "3";
WOMT_aParteien_N2ID[4] = "7537";
WOMT_aParteien_ID2N[7537] = "4";
WOMT_aParteien_N2ID[5] = "7539";
WOMT_aParteien_ID2N[7539] = "5";
WOMT_aParteien_N2ID[6] = "7543";
WOMT_aParteien_ID2N[7543] = "6";
WOMT_aParteien_N2ID[7] = "7545";
WOMT_aParteien_ID2N[7545] = "7";
WOMT_aParteien_N2ID[8] = "7547";
WOMT_aParteien_ID2N[7547] = "8";
WOMT_aParteien_N2ID[9] = "7549";
WOMT_aParteien_ID2N[7549] = "9";
WOMT_aParteien_N2ID[10] = "7551";
WOMT_aParteien_ID2N[7551] = "10";
WOMT_aParteien_N2ID[11] = "7553";
WOMT_aParteien_ID2N[7553] = "11";
WOMT_aParteien_N2ID[12] = "7555";
WOMT_aParteien_ID2N[7555] = "12";
WOMT_aParteien_N2ID[13] = "7713";
WOMT_aParteien_ID2N[7713] = "13";
WOMT_aParteien_N2ID[14] = "7557";
WOMT_aParteien_ID2N[7557] = "14";
WOMT_aParteien_N2ID[15] = "9497";
WOMT_aParteien_ID2N[9497] = "15";
WOMT_aParteien_N2ID[16] = "7559";
WOMT_aParteien_ID2N[7559] = "16";
WOMT_aParteien_N2ID[17] = "7561";
WOMT_aParteien_ID2N[7561] = "17";
WOMT_aParteien_N2ID[18] = "7563";
WOMT_aParteien_ID2N[7563] = "18";
WOMT_aParteien_N2ID[19] = "7565";
WOMT_aParteien_ID2N[7565] = "19";
WOMT_aParteien_N2ID[20] = "7567";
WOMT_aParteien_ID2N[7567] = "20";
WOMT_aParteien_N2ID[21] = "7571";
WOMT_aParteien_ID2N[7571] = "21";
WOMT_aParteien_N2ID[22] = "7573";
WOMT_aParteien_ID2N[7573] = "22";
WOMT_aParteien_N2ID[23] = "7576";
WOMT_aParteien_ID2N[7576] = "23";
WOMT_aParteien_N2ID[24] = "7579";
WOMT_aParteien_ID2N[7579] = "24";
WOMT_aParteien_N2ID[25] = "7585";
WOMT_aParteien_ID2N[7585] = "25";
WOMT_aParteien_N2ID[26] = "7588";
WOMT_aParteien_ID2N[7588] = "26";
WOMT_aParteien_N2ID[27] = "8547";
WOMT_aParteien_ID2N[8547] = "27";
WOMT_aParteien_N2ID[28] = "7594";
WOMT_aParteien_ID2N[7594] = "28";
WOMT_aParteien_N2ID[29] = "8632";
WOMT_aParteien_ID2N[8632] = "29";
WOMT_aParteien_N2ID[30] = "7604";
WOMT_aParteien_ID2N[7604] = "30";
WOMT_aParteien_N2ID[31] = "7610";
WOMT_aParteien_ID2N[7610] = "31";
WOMT_aParteien_N2ID[32] = "7617";
WOMT_aParteien_ID2N[7617] = "32";
WOMT_aParteien_N2ID[33] = "10741";
WOMT_aParteien_ID2N[10741] = "33";
WOMT_aParteien_N2ID[34] = "7619";
WOMT_aParteien_ID2N[7619] = "34";
WOMT_aParteien_N2ID[35] = "7621";
WOMT_aParteien_ID2N[7621] = "35";
WOMT_aParteien_N2ID[36] = "7623";
WOMT_aParteien_ID2N[7623] = "36";
WOMT_aParteien_N2ID[37] = "7625";
WOMT_aParteien_ID2N[7625] = "37";
WOMT_aThesen_N2ID[0] = "7742";
WOMT_aThesen_ID2N[7742] = "0";
WOMT_aThesenBilder[0] = new Array();
WOMT_aThesenBilder[0][0] = "images/";
WOMT_aThesenBilder[0][1] = "0";
WOMT_aThesenBilder[0][2] = "0";
WOMT_aThesen_N2ID[1] = "7794";
WOMT_aThesen_ID2N[7794] = "1";
WOMT_aThesenBilder[1] = new Array();
WOMT_aThesenBilder[1][0] = "images/";
WOMT_aThesenBilder[1][1] = "0";
WOMT_aThesenBilder[1][2] = "0";
WOMT_aThesen_N2ID[2] = "7779";
WOMT_aThesen_ID2N[7779] = "2";
WOMT_aThesenBilder[2] = new Array();
WOMT_aThesenBilder[2][0] = "images/";
WOMT_aThesenBilder[2][1] = "0";
WOMT_aThesenBilder[2][2] = "0";
WOMT_aThesen_N2ID[3] = "7736";
WOMT_aThesen_ID2N[7736] = "3";
WOMT_aThesenBilder[3] = new Array();
WOMT_aThesenBilder[3][0] = "images/";
WOMT_aThesenBilder[3][1] = "0";
WOMT_aThesenBilder[3][2] = "0";
WOMT_aThesen_N2ID[4] = "7733";
WOMT_aThesen_ID2N[7733] = "4";
WOMT_aThesenBilder[4] = new Array();
WOMT_aThesenBilder[4][0] = "images/";
WOMT_aThesenBilder[4][1] = "0";
WOMT_aThesenBilder[4][2] = "0";
WOMT_aThesen_N2ID[5] = "7766";
WOMT_aThesen_ID2N[7766] = "5";
WOMT_aThesenBilder[5] = new Array();
WOMT_aThesenBilder[5][0] = "images/";
WOMT_aThesenBilder[5][1] = "0";
WOMT_aThesenBilder[5][2] = "0";
WOMT_aThesen_N2ID[6] = "7738";
WOMT_aThesen_ID2N[7738] = "6";
WOMT_aThesenBilder[6] = new Array();
WOMT_aThesenBilder[6][0] = "images/";
WOMT_aThesenBilder[6][1] = "0";
WOMT_aThesenBilder[6][2] = "0";
WOMT_aThesen_N2ID[7] = "7732";
WOMT_aThesen_ID2N[7732] = "7";
WOMT_aThesenBilder[7] = new Array();
WOMT_aThesenBilder[7][0] = "images/";
WOMT_aThesenBilder[7][1] = "0";
WOMT_aThesenBilder[7][2] = "0";
WOMT_aThesen_N2ID[8] = "7757";
WOMT_aThesen_ID2N[7757] = "8";
WOMT_aThesenBilder[8] = new Array();
WOMT_aThesenBilder[8][0] = "images/";
WOMT_aThesenBilder[8][1] = "0";
WOMT_aThesenBilder[8][2] = "0";
WOMT_aThesen_N2ID[9] = "7750";
WOMT_aThesen_ID2N[7750] = "9";
WOMT_aThesenBilder[9] = new Array();
WOMT_aThesenBilder[9][0] = "images/";
WOMT_aThesenBilder[9][1] = "0";
WOMT_aThesenBilder[9][2] = "0";
WOMT_aThesen_N2ID[10] = "7727";
WOMT_aThesen_ID2N[7727] = "10";
WOMT_aThesenBilder[10] = new Array();
WOMT_aThesenBilder[10][0] = "images/";
WOMT_aThesenBilder[10][1] = "0";
WOMT_aThesenBilder[10][2] = "0";
WOMT_aThesen_N2ID[11] = "7781";
WOMT_aThesen_ID2N[7781] = "11";
WOMT_aThesenBilder[11] = new Array();
WOMT_aThesenBilder[11][0] = "images/";
WOMT_aThesenBilder[11][1] = "0";
WOMT_aThesenBilder[11][2] = "0";
WOMT_aThesen_N2ID[12] = "7724";
WOMT_aThesen_ID2N[7724] = "12";
WOMT_aThesenBilder[12] = new Array();
WOMT_aThesenBilder[12][0] = "images/";
WOMT_aThesenBilder[12][1] = "0";
WOMT_aThesenBilder[12][2] = "0";
WOMT_aThesen_N2ID[13] = "7760";
WOMT_aThesen_ID2N[7760] = "13";
WOMT_aThesenBilder[13] = new Array();
WOMT_aThesenBilder[13][0] = "images/";
WOMT_aThesenBilder[13][1] = "0";
WOMT_aThesenBilder[13][2] = "0";
WOMT_aThesen_N2ID[14] = "7771";
WOMT_aThesen_ID2N[7771] = "14";
WOMT_aThesenBilder[14] = new Array();
WOMT_aThesenBilder[14][0] = "images/";
WOMT_aThesenBilder[14][1] = "0";
WOMT_aThesenBilder[14][2] = "0";
WOMT_aThesen_N2ID[15] = "7797";
WOMT_aThesen_ID2N[7797] = "15";
WOMT_aThesenBilder[15] = new Array();
WOMT_aThesenBilder[15][0] = "images/";
WOMT_aThesenBilder[15][1] = "0";
WOMT_aThesenBilder[15][2] = "0";
WOMT_aThesen_N2ID[16] = "7747";
WOMT_aThesen_ID2N[7747] = "16";
WOMT_aThesenBilder[16] = new Array();
WOMT_aThesenBilder[16][0] = "images/";
WOMT_aThesenBilder[16][1] = "0";
WOMT_aThesenBilder[16][2] = "0";
WOMT_aThesen_N2ID[17] = "7788";
WOMT_aThesen_ID2N[7788] = "17";
WOMT_aThesenBilder[17] = new Array();
WOMT_aThesenBilder[17][0] = "images/";
WOMT_aThesenBilder[17][1] = "0";
WOMT_aThesenBilder[17][2] = "0";
WOMT_aThesen_N2ID[18] = "7740";
WOMT_aThesen_ID2N[7740] = "18";
WOMT_aThesenBilder[18] = new Array();
WOMT_aThesenBilder[18][0] = "images/";
WOMT_aThesenBilder[18][1] = "0";
WOMT_aThesenBilder[18][2] = "0";
WOMT_aThesen_N2ID[19] = "7726";
WOMT_aThesen_ID2N[7726] = "19";
WOMT_aThesenBilder[19] = new Array();
WOMT_aThesenBilder[19][0] = "images/";
WOMT_aThesenBilder[19][1] = "0";
WOMT_aThesenBilder[19][2] = "0";
WOMT_aThesen_N2ID[20] = "7785";
WOMT_aThesen_ID2N[7785] = "20";
WOMT_aThesenBilder[20] = new Array();
WOMT_aThesenBilder[20][0] = "images/";
WOMT_aThesenBilder[20][1] = "0";
WOMT_aThesenBilder[20][2] = "0";
WOMT_aThesen_N2ID[21] = "7796";
WOMT_aThesen_ID2N[7796] = "21";
WOMT_aThesenBilder[21] = new Array();
WOMT_aThesenBilder[21][0] = "images/";
WOMT_aThesenBilder[21][1] = "0";
WOMT_aThesenBilder[21][2] = "0";
WOMT_aThesen_N2ID[22] = "7790";
WOMT_aThesen_ID2N[7790] = "22";
WOMT_aThesenBilder[22] = new Array();
WOMT_aThesenBilder[22][0] = "images/";
WOMT_aThesenBilder[22][1] = "0";
WOMT_aThesenBilder[22][2] = "0";
WOMT_aThesen_N2ID[23] = "7768";
WOMT_aThesen_ID2N[7768] = "23";
WOMT_aThesenBilder[23] = new Array();
WOMT_aThesenBilder[23][0] = "images/";
WOMT_aThesenBilder[23][1] = "0";
WOMT_aThesenBilder[23][2] = "0";
WOMT_aThesen_N2ID[24] = "7792";
WOMT_aThesen_ID2N[7792] = "24";
WOMT_aThesenBilder[24] = new Array();
WOMT_aThesenBilder[24][0] = "images/";
WOMT_aThesenBilder[24][1] = "0";
WOMT_aThesenBilder[24][2] = "0";
WOMT_aThesen_N2ID[25] = "7780";
WOMT_aThesen_ID2N[7780] = "25";
WOMT_aThesenBilder[25] = new Array();
WOMT_aThesenBilder[25][0] = "images/";
WOMT_aThesenBilder[25][1] = "0";
WOMT_aThesenBilder[25][2] = "0";
WOMT_aThesen_N2ID[26] = "7764";
WOMT_aThesen_ID2N[7764] = "26";
WOMT_aThesenBilder[26] = new Array();
WOMT_aThesenBilder[26][0] = "images/";
WOMT_aThesenBilder[26][1] = "0";
WOMT_aThesenBilder[26][2] = "0";
WOMT_aThesen_N2ID[27] = "7748";
WOMT_aThesen_ID2N[7748] = "27";
WOMT_aThesenBilder[27] = new Array();
WOMT_aThesenBilder[27][0] = "images/";
WOMT_aThesenBilder[27][1] = "0";
WOMT_aThesenBilder[27][2] = "0";
WOMT_aThesen_N2ID[28] = "7762";
WOMT_aThesen_ID2N[7762] = "28";
WOMT_aThesenBilder[28] = new Array();
WOMT_aThesenBilder[28][0] = "images/";
WOMT_aThesenBilder[28][1] = "0";
WOMT_aThesenBilder[28][2] = "0";
WOMT_aThesen_N2ID[29] = "7729";
WOMT_aThesen_ID2N[7729] = "29";
WOMT_aThesenBilder[29] = new Array();
WOMT_aThesenBilder[29][0] = "images/";
WOMT_aThesenBilder[29][1] = "0";
WOMT_aThesenBilder[29][2] = "0";
WOMT_aThesen_N2ID[30] = "7773";
WOMT_aThesen_ID2N[7773] = "30";
WOMT_aThesenBilder[30] = new Array();
WOMT_aThesenBilder[30][0] = "images/";
WOMT_aThesenBilder[30][1] = "0";
WOMT_aThesenBilder[30][2] = "0";
WOMT_aThesen_N2ID[31] = "7789";
WOMT_aThesen_ID2N[7789] = "31";
WOMT_aThesenBilder[31] = new Array();
WOMT_aThesenBilder[31][0] = "images/";
WOMT_aThesenBilder[31][1] = "0";
WOMT_aThesenBilder[31][2] = "0";
WOMT_aThesen_N2ID[32] = "7739";
WOMT_aThesen_ID2N[7739] = "32";
WOMT_aThesenBilder[32] = new Array();
WOMT_aThesenBilder[32][0] = "images/";
WOMT_aThesenBilder[32][1] = "0";
WOMT_aThesenBilder[32][2] = "0";
WOMT_aThesen_N2ID[33] = "7746";
WOMT_aThesen_ID2N[7746] = "33";
WOMT_aThesenBilder[33] = new Array();
WOMT_aThesenBilder[33][0] = "images/";
WOMT_aThesenBilder[33][1] = "0";
WOMT_aThesenBilder[33][2] = "0";
WOMT_aThesen_N2ID[34] = "7755";
WOMT_aThesen_ID2N[7755] = "34";
WOMT_aThesenBilder[34] = new Array();
WOMT_aThesenBilder[34][0] = "images/";
WOMT_aThesenBilder[34][1] = "0";
WOMT_aThesenBilder[34][2] = "0";
WOMT_aThesen_N2ID[35] = "7721";
WOMT_aThesen_ID2N[7721] = "35";
WOMT_aThesenBilder[35] = new Array();
WOMT_aThesenBilder[35][0] = "images/";
WOMT_aThesenBilder[35][1] = "0";
WOMT_aThesenBilder[35][2] = "0";
WOMT_aThesen_N2ID[36] = "7743";
WOMT_aThesen_ID2N[7743] = "36";
WOMT_aThesenBilder[36] = new Array();
WOMT_aThesenBilder[36][0] = "images/";
WOMT_aThesenBilder[36][1] = "0";
WOMT_aThesenBilder[36][2] = "0";
WOMT_aThesen_N2ID[37] = "7717";
WOMT_aThesen_ID2N[7717] = "37";
WOMT_aThesenBilder[37] = new Array();
WOMT_aThesenBilder[37][0] = "images/";
WOMT_aThesenBilder[37][1] = "0";
WOMT_aThesenBilder[37][2] = "0";
WOMT_aThesen[0] = new Array();
WOMT_aThesenLinks[0] = new Array();
WOMT_aThesenVotematch[0] = "0";
WOMT_aThesenVotematchId[0] = "0";
WOMT_aThesen[0][0] = new Array();
WOMT_aThesenLinks[0][0] = new Array();
WOMT_aThesenLinks[0][0][0] = new Array();
WOMT_aThesenLinks[0][0][0][0] =
  "Verkehrspolitik (Handwörterbuch des politischen Systems, bpb.de)";
WOMT_aThesenLinks[0][0][0][1] =
  "https://www.bpb.de/nachschlagen/lexika/handwoerterbuch-politisches-system/202201/verkehrspolitik";
WOMT_aThesenLinks[0][0][0][2] = "url";
WOMT_aThesenLinks[0][0][1] = new Array();
WOMT_aThesenLinks[0][0][1][0] = "APuZ: Das Auto (bpb.de)";
WOMT_aThesenLinks[0][0][1][1] = "https://www.bpb.de/apuz/298736/das-auto";
WOMT_aThesenLinks[0][0][1][2] = "url";
WOMT_aThesenLinks[0][0][2] = new Array();
WOMT_aThesenLinks[0][0][2][0] =
  "Tempolimit und Reduktion des Kraftstoffverbrauchs (Forschen mit GrafStat, bpb.de)";
WOMT_aThesenLinks[0][0][2][1] =
  "https://www.bpb.de/lernen/grafstat/134921/m-04-09-tempolimit-und-reduktion-des-kraftstoffverbrauchs";
WOMT_aThesenLinks[0][0][2][2] = "url";
WOMT_aThesen[0][0][0] = "Tempolimit auf Autobahnen";
WOMT_aThesen[0][0][1] =
  "Auf allen Autobahnen soll ein generelles Tempolimit gelten.";
WOMT_aThesenThema[0] = "0";
WOMT_aThesenParteien[0] = new Array();

WOMT_aThesen[1] = new Array();
WOMT_aThesenLinks[1] = new Array();
WOMT_aThesenVotematch[1] = "0";
WOMT_aThesenVotematchId[1] = "0";
WOMT_aThesen[1][0] = new Array();
WOMT_aThesenLinks[1][0] = new Array();
WOMT_aThesenLinks[1][0][0] = new Array();
WOMT_aThesenLinks[1][0][0][0] =
  "Stefan Bayer: Der Verteidigungshaushalt – Trendwende bei den Verteidigungsausgaben? (Dossier: Deutsche Verteidigungspolitik, bpb.de)";
WOMT_aThesenLinks[1][0][0][1] =
  "https://www.bpb.de/politik/grundfragen/deutsche-verteidigungspolitik/249290/verteidigungsausgaben";
WOMT_aThesenLinks[1][0][0][2] = "url";
WOMT_aThesenLinks[1][0][1] = new Array();
WOMT_aThesenLinks[1][0][1][0] =
  "Johannes Varwick: Von Leistungsgrenzen und Trendwenden. Was soll und kann die Bundeswehr? (APuZ: Militär, bpb.de)";
WOMT_aThesenLinks[1][0][1][1] =
  "https://www.bpb.de/apuz/307664/von-leistungsgrenzen-und-trendwenden-was-soll-und-kann-die-bundeswehr";
WOMT_aThesenLinks[1][0][1][2] = "url";
WOMT_aThesenLinks[1][0][2] = new Array();
WOMT_aThesenLinks[1][0][2][0] =
  "Debatte: Nato-Gipfel: Steht Europa in der Schuld? (eurotopics.net)";
WOMT_aThesenLinks[1][0][2][1] =
  "https://www.eurotopics.net/de/202574/nato-gipfel-steht-europa-in-der-schuld";
WOMT_aThesenLinks[1][0][2][2] = "url";
WOMT_aThesen[1][0][0] = "Erhöhung der Verteidigungsausgaben";
WOMT_aThesen[1][0][1] = "Deutschland soll seine Verteidigungsausgaben erhöhen.";
WOMT_aThesenThema[1] = "0";
WOMT_aThesenParteien[1] = new Array();

WOMT_aThesen[2] = new Array();
WOMT_aThesenLinks[2] = new Array();
WOMT_aThesenVotematch[2] = "0";
WOMT_aThesenVotematchId[2] = "0";
WOMT_aThesen[2][0] = new Array();
WOMT_aThesenLinks[2][0] = new Array();
WOMT_aThesenLinks[2][0][0] = new Array();
WOMT_aThesenLinks[2][0][0][0] =
  "Lia Haubner, Helena Düll: Wählen schon mit 16? - Pro und Contra im Video (fluter.de)";
WOMT_aThesenLinks[2][0][0][1] =
  "https://www.fluter.de/waehlen-schon-mit-16-pro-und-contra-im-video";
WOMT_aThesenLinks[2][0][0][2] = "url";
WOMT_aThesenLinks[2][0][1] = new Array();
WOMT_aThesenLinks[2][0][1][0] = "Wahlrecht (Das junge Politiklexikon, bpb.de)";
WOMT_aThesenLinks[2][0][1][1] =
  "https://www.bpb.de/nachschlagen/lexika/das-junge-politik-lexikon/321383/wahlrecht";
WOMT_aThesenLinks[2][0][1][2] = "url";
WOMT_aThesenLinks[2][0][2] = new Array();
WOMT_aThesenLinks[2][0][2][0] =
  "Wahlbeteiligung und Briefwahl (Zahlen und Fakten: Bundestagswahlen, bpb.de)";
WOMT_aThesenLinks[2][0][2][1] =
  "https://www.bpb.de/nachschlagen/zahlen-und-fakten/bundestagswahlen/280218/wahlbeteiligung-und-briefwahl";
WOMT_aThesenLinks[2][0][2][2] = "url";
WOMT_aThesen[2][0][0] = "Wählen ab 16";
WOMT_aThesen[2][0][1] =
  "Bei Bundestagswahlen sollen auch Jugendliche ab 16 Jahren wählen dürfen.";
WOMT_aThesenThema[2] = "0";
WOMT_aThesenParteien[2] = new Array();

WOMT_aThesen[3] = new Array();
WOMT_aThesenLinks[3] = new Array();
WOMT_aThesenVotematch[3] = "0";
WOMT_aThesenVotematchId[3] = "0";
WOMT_aThesen[3][0] = new Array();
WOMT_aThesenLinks[3][0] = new Array();
WOMT_aThesenLinks[3][0][0] = new Array();
WOMT_aThesenLinks[3][0][0][0] = "Energiewende (Lexikon der Wirtschaft, bpb.de)";
WOMT_aThesenLinks[3][0][0][1] =
  "https://www.bpb.de/nachschlagen/lexika/lexikon-der-wirtschaft/159947/energiewende";
WOMT_aThesenLinks[3][0][0][2] = "url";
WOMT_aThesenLinks[3][0][1] = new Array();
WOMT_aThesenLinks[3][0][1][0] =
  "Weert Canzler: Mit angezogener Handbremse: Zum Stand der Energiewende (APuZ: Infrastruktur, bpb.de)";
WOMT_aThesenLinks[3][0][1][1] =
  "https://www.bpb.de/apuz/246429/mit-angezogener-handbremse-zum-stand-der-energiewende";
WOMT_aThesenLinks[3][0][1][2] = "url";
WOMT_aThesenLinks[3][0][2] = new Array();
WOMT_aThesenLinks[3][0][2][0] =
  "Erneuerbare Energien (Zahlen und Fakten: Globalisierung, bpb.de)";
WOMT_aThesenLinks[3][0][2][1] =
  "https://www.bpb.de/nachschlagen/zahlen-und-fakten/globalisierung/52744/erneuerbare-energien";
WOMT_aThesenLinks[3][0][2][2] = "url";
WOMT_aThesen[3][0][0] = "Windenergie";
WOMT_aThesen[3][0][1] = "Die Förderung von Windenergie soll beendet werden.";
WOMT_aThesenThema[3] = "0";
WOMT_aThesenParteien[3] = new Array();

WOMT_aThesen[4] = new Array();
WOMT_aThesenLinks[4] = new Array();
WOMT_aThesenVotematch[4] = "0";
WOMT_aThesenVotematchId[4] = "0";
WOMT_aThesen[4][0] = new Array();
WOMT_aThesenLinks[4][0] = new Array();
WOMT_aThesenLinks[4][0][0] = new Array();
WOMT_aThesenLinks[4][0][0][0] =
  "Wohnungspolitik (Handwörterbuch des politischen Systems, bpb.de)";
WOMT_aThesenLinks[4][0][0][1] =
  "https://www.bpb.de/nachschlagen/lexika/handwoerterbuch-politisches-system/202215/wohnungspolitik";
WOMT_aThesenLinks[4][0][0][2] = "url";
WOMT_aThesenLinks[4][0][1] = new Array();
WOMT_aThesenLinks[4][0][1][0] =
  "Die Mietpreisbremse tritt in Kraft (Hintergrund aktuell, bpb.de)";
WOMT_aThesenLinks[4][0][1][1] =
  "https://www.bpb.de/politik/hintergrund-aktuell/208048/die-mietpreisbremse-tritt-in-kraft";
WOMT_aThesenLinks[4][0][1][2] = "url";
WOMT_aThesenLinks[4][0][2] = new Array();
WOMT_aThesenLinks[4][0][2][0] =
  "Debatte: Wie werden Mieten wieder bezahlbar? (eurotopics.net)";
WOMT_aThesenLinks[4][0][2][1] = "https://www.eurotopics.net/de/222695";
WOMT_aThesenLinks[4][0][2][2] = "url";
WOMT_aThesen[4][0][0] = "Begrenzung für Mieterhöhungen";
WOMT_aThesen[4][0][1] =
  "Die Möglichkeiten der Vermieterinnen und Vermieter, Wohnungsmieten zu erhöhen, sollen gesetzlich stärker begrenzt werden.";
WOMT_aThesenThema[4] = "0";
WOMT_aThesenParteien[4] = new Array();

WOMT_aThesen[5] = new Array();
WOMT_aThesenLinks[5] = new Array();
WOMT_aThesenVotematch[5] = "0";
WOMT_aThesenVotematchId[5] = "0";
WOMT_aThesen[5][0] = new Array();
WOMT_aThesenLinks[5][0] = new Array();
WOMT_aThesenLinks[5][0][0] = new Array();
WOMT_aThesenLinks[5][0][0][0] = "Patent (Lexikon der Wirtschaft, bpb.de)";
WOMT_aThesenLinks[5][0][0][1] =
  "https://www.bpb.de/nachschlagen/lexika/lexikon-der-wirtschaft/20409/patent";
WOMT_aThesenLinks[5][0][0][2] = "url";
WOMT_aThesenLinks[5][0][1] = new Array();
WOMT_aThesenLinks[5][0][1][0] =
  "Debatte: Impfen: Argumente für eine globale Fairness (eurotopics.net)";
WOMT_aThesenLinks[5][0][1][1] =
  "https://www.eurotopics.net/de/255609/impfen-argumente-fuer-eine-globale-fairness";
WOMT_aThesenLinks[5][0][1][2] = "url";
WOMT_aThesenLinks[5][0][2] = new Array();
WOMT_aThesenLinks[5][0][2][0] =
  "Philipp Osten: Ethik des Impfens. Impfentscheidungen, ethische Konflikte und historische Hintergründe (APuZ: Medizin und Ethik in der Pandemie, bpb.de)";
WOMT_aThesenLinks[5][0][2][1] =
  "https://www.bpb.de/apuz/medizin-und-ethik-in-der-pandemie-2021/334619/ethik-des-impfens-impfentscheidungen-ethische-konflikte-und-historische-hintergruende";
WOMT_aThesenLinks[5][0][2][2] = "url";
WOMT_aThesen[5][0][0] = "Patentschutz für Impfstoffe";
WOMT_aThesen[5][0][1] =
  "Impfstoffe gegen Covid-19 sollen weiterhin durch Patente geschützt sein.";
WOMT_aThesenThema[5] = "0";
WOMT_aThesenParteien[5] = new Array();

WOMT_aThesen[6] = new Array();
WOMT_aThesenLinks[6] = new Array();
WOMT_aThesenVotematch[6] = "0";
WOMT_aThesenVotematchId[6] = "0";
WOMT_aThesen[6][0] = new Array();
WOMT_aThesenLinks[6][0] = new Array();
WOMT_aThesenLinks[6][0][0] = new Array();
WOMT_aThesenLinks[6][0][0][0] = "APuZ: Lausitz (bpb.de)";
WOMT_aThesenLinks[6][0][0][1] = "https://www.bpb.de/apuz/304322/lausitz";
WOMT_aThesenLinks[6][0][0][2] = "url";
WOMT_aThesenLinks[6][0][1] = new Array();
WOMT_aThesenLinks[6][0][1][0] =
  "Debatte: Wie gelingt der Kohleausstieg? (eurotopics.net)";
WOMT_aThesenLinks[6][0][1][1] =
  "https://www.eurotopics.net/de/214021/wie-gelingt-der-kohleausstieg";
WOMT_aThesenLinks[6][0][1][2] = "url";
WOMT_aThesenLinks[6][0][2] = new Array();
WOMT_aThesenLinks[6][0][2][0] =
  "Kohle-Reserven (Zahlen und Fakten: Globalisierung, bpb.de)";
WOMT_aThesenLinks[6][0][2][1] =
  "https://www.bpb.de/nachschlagen/zahlen-und-fakten/globalisierung/52770/kohle-reserven";
WOMT_aThesenLinks[6][0][2][2] = "url";
WOMT_aThesen[6][0][0] = "Ausstieg aus der Kohleverstromung";
WOMT_aThesen[6][0][1] =
  "Der für das Jahr 2038 geplante Ausstieg aus der Kohleverstromung soll vorgezogen werden.";
WOMT_aThesenThema[6] = "0";
WOMT_aThesenParteien[6] = new Array();

WOMT_aThesen[7] = new Array();
WOMT_aThesenLinks[7] = new Array();
WOMT_aThesenVotematch[7] = "0";
WOMT_aThesenVotematchId[7] = "0";
WOMT_aThesen[7][0] = new Array();
WOMT_aThesenLinks[7][0] = new Array();
WOMT_aThesenLinks[7][0][0] = new Array();
WOMT_aThesenLinks[7][0][0][0] =
  "Rentenversicherung (Lexikon der Wirtschaft, bpb.de)";
WOMT_aThesenLinks[7][0][0][1] =
  "https://www.bpb.de/nachschlagen/lexika/lexikon-der-wirtschaft/20450/rentenversicherung";
WOMT_aThesenLinks[7][0][0][2] = "url";
WOMT_aThesenLinks[7][0][1] = new Array();
WOMT_aThesenLinks[7][0][1][0] =
  "Gerhard Bäcker, Ernst Kistler: Versichertenkreis (Dossier: Rentenpolitik, bpb.de)";
WOMT_aThesenLinks[7][0][1][1] =
  "https://www.bpb.de/politik/innenpolitik/rentenpolitik/289581/versichertenkreis";
WOMT_aThesenLinks[7][0][1][2] = "url";
WOMT_aThesenLinks[7][0][2] = new Array();
WOMT_aThesenLinks[7][0][2][0] = "Dossier: Rentenpolitik (bpb.de)";
WOMT_aThesenLinks[7][0][2][1] =
  "https://www.bpb.de/politik/innenpolitik/rentenpolitik/";
WOMT_aThesenLinks[7][0][2][2] = "url";
WOMT_aThesen[7][0][0] = "Gesetzliche Rentenversicherung";
WOMT_aThesen[7][0][1] =
  "Alle Erwerbstätigen sollen in der gesetzlichen Rentenversicherung versichert sein müssen.";
WOMT_aThesenThema[7] = "0";
WOMT_aThesenParteien[7] = new Array();

WOMT_aThesen[8] = new Array();
WOMT_aThesenLinks[8] = new Array();
WOMT_aThesenVotematch[8] = "0";
WOMT_aThesenVotematchId[8] = "0";
WOMT_aThesen[8][0] = new Array();
WOMT_aThesenLinks[8][0] = new Array();
WOMT_aThesenLinks[8][0][0] = new Array();
WOMT_aThesenLinks[8][0][0][0] =
  "Familiennachzug (Glossar Migration – Integration – Flucht & Asyl, bpb.de)";
WOMT_aThesenLinks[8][0][0][1] =
  "https://www.bpb.de/nachschlagen/lexika/270365/familiennachzug";
WOMT_aThesenLinks[8][0][0][2] = "url";
WOMT_aThesenLinks[8][0][1] = new Array();
WOMT_aThesenLinks[8][0][1][0] = "Themenseite: Flucht und Asyl (bpb.de)";
WOMT_aThesenLinks[8][0][1][1] =
  "https://www.bpb.de/gesellschaft/migration/flucht/";
WOMT_aThesenLinks[8][0][1][2] = "url";
WOMT_aThesenLinks[8][0][2] = new Array();
WOMT_aThesenLinks[8][0][2][0] =
  "Ausländische Bevölkerung nach Aufenthaltsstatus (Zahlen und Fakten: Die soziale Situation in Deutschland, bpb.de)";
WOMT_aThesenLinks[8][0][2][1] =
  "https://www.bpb.de/nachschlagen/zahlen-und-fakten/soziale-situation-in-deutschland/268959/aufenthaltsstatus-schutzstatus";
WOMT_aThesenLinks[8][0][2][2] = "url";
WOMT_aThesen[8][0][0] = "Abschaffung des Familiennachzugs";
WOMT_aThesen[8][0][1] =
  "Das Recht anerkannter Flüchtlinge auf Familiennachzug soll abgeschafft werden.";
WOMT_aThesenThema[8] = "0";
WOMT_aThesenParteien[8] = new Array();

WOMT_aThesen[9] = new Array();
WOMT_aThesenLinks[9] = new Array();
WOMT_aThesenVotematch[9] = "0";
WOMT_aThesenVotematchId[9] = "0";
WOMT_aThesen[9][0] = new Array();
WOMT_aThesenLinks[9][0] = new Array();
WOMT_aThesenLinks[9][0][0] = new Array();
WOMT_aThesenLinks[9][0][0][0] =
  "Debatte: EU zwingt Konzerne zu mehr Steuertransparenz (eurotopics.net)";
WOMT_aThesenLinks[9][0][0][1] =
  "https://www.eurotopics.net/de/262267/eu-zwingt-konzerne-zu-mehr-steuertransparenz";
WOMT_aThesenLinks[9][0][0][2] = "url";
WOMT_aThesenLinks[9][0][1] = new Array();
WOMT_aThesenLinks[9][0][1][0] =
  "Debatte: 130 Länder sagen Ja zur globalen Mindeststeuer (eurotopics.net)";
WOMT_aThesenLinks[9][0][1][1] =
  "https://www.eurotopics.net/de/263893/130-laender-sagen-ja-zur-globalen-mindeststeuer";
WOMT_aThesenLinks[9][0][1][2] = "url";
WOMT_aThesenLinks[9][0][2] = new Array();
WOMT_aThesenLinks[9][0][2][0] =
  "Themenseite: Digitales und Digitalisierung (bpb.de)";
WOMT_aThesenLinks[9][0][2][1] = "https://www.bpb.de/gesellschaft/digitales/";
WOMT_aThesenLinks[9][0][2][2] = "url";
WOMT_aThesen[9][0][0] = "Steuer auf digitale Dienstleistungen";
WOMT_aThesen[9][0][1] =
  "Auf den Umsatz, der in Deutschland mit digitalen Dienstleistungen erzielt wird, soll eine nationale Steuer erhoben werden.";
WOMT_aThesenThema[9] = "0";
WOMT_aThesenParteien[9] = new Array();

WOMT_aThesen[10] = new Array();
WOMT_aThesenLinks[10] = new Array();
WOMT_aThesenVotematch[10] = "0";
WOMT_aThesenVotematchId[10] = "0";
WOMT_aThesen[10][0] = new Array();
WOMT_aThesenLinks[10][0] = new Array();
WOMT_aThesenLinks[10][0][0] = new Array();
WOMT_aThesenLinks[10][0][0][0] =
  "Bevölkerung nach Lebensformen (Zahlen und Fakten: Die soziale Situation in Deutschland, bpb.de)";
WOMT_aThesenLinks[10][0][0][1] =
  "https://www.bpb.de/nachschlagen/zahlen-und-fakten/soziale-situation-in-deutschland/147370/themengrafik-lebensformen";
WOMT_aThesenLinks[10][0][0][2] = "url";
WOMT_aThesenLinks[10][0][1] = new Array();
WOMT_aThesenLinks[10][0][1][0] =
  "Norbert F. Schneider: Vielfalt der Familie (Dossier: Familienpolitik, bpb.de)";
WOMT_aThesenLinks[10][0][1][1] =
  "https://www.bpb.de/politik/innenpolitik/familienpolitik/207447/vielfalt-der-familie";
WOMT_aThesenLinks[10][0][1][2] = "url";
WOMT_aThesenLinks[10][0][2] = new Array();
WOMT_aThesenLinks[10][0][2][0] =
  "Informationen zur politischen Bildung: Familie und Familienpolitik (bpb.de)";
WOMT_aThesenLinks[10][0][2][1] =
  "https://www.bpb.de/izpb/8013/familie-und-familienpolitik";
WOMT_aThesenLinks[10][0][2][2] = "url";
WOMT_aThesen[10][0][0] = "Traditionelle Familie";
WOMT_aThesen[10][0][1] =
  "Die traditionelle Familie aus Vater, Mutter und Kindern soll stärker als andere Lebensgemeinschaften gefördert werden.";
WOMT_aThesenThema[10] = "0";
WOMT_aThesenParteien[10] = new Array();

WOMT_aThesen[11] = new Array();
WOMT_aThesenLinks[11] = new Array();
WOMT_aThesenVotematch[11] = "0";
WOMT_aThesenVotematchId[11] = "0";
WOMT_aThesen[11][0] = new Array();
WOMT_aThesenLinks[11][0] = new Array();
WOMT_aThesenLinks[11][0][0] = new Array();
WOMT_aThesenLinks[11][0][0][0] = "Parteispenden (pocket Politik, bpb.de)";
WOMT_aThesenLinks[11][0][0][1] =
  "https://www.bpb.de/nachschlagen/lexika/pocket-politik/16525/parteispenden";
WOMT_aThesenLinks[11][0][0][2] = "url";
WOMT_aThesenLinks[11][0][1] = new Array();
WOMT_aThesenLinks[11][0][1][0] =
  "Heinrich Pehle: Die Finanzierung der Parteien in Deutschland (Dossier: Parteien in Deutschland, bpb.de)";
WOMT_aThesenLinks[11][0][1][1] =
  "https://www.bpb.de/politik/grundfragen/parteien-in-deutschland/42042/finanzierung";
WOMT_aThesenLinks[11][0][1][2] = "url";
WOMT_aThesenLinks[11][0][2] = new Array();
WOMT_aThesenLinks[11][0][2][0] =
  "Oskar Niedermayer: Einnahmen und Ausgaben der Parteien (Dossier: Parteien in Deutschland, bpb.de)";
WOMT_aThesenLinks[11][0][2][1] =
  "https://www.bpb.de/politik/grundfragen/parteien-in-deutschland/zahlen-und-fakten/42237/einnahmen-und-ausgaben";
WOMT_aThesenLinks[11][0][2][2] = "url";
WOMT_aThesen[11][0][0] = "Parteispenden";
WOMT_aThesen[11][0][1] =
  "Spenden von Unternehmen an Parteien sollen weiterhin erlaubt sein.";
WOMT_aThesenThema[11] = "0";
WOMT_aThesenParteien[11] = new Array();

WOMT_aThesen[12] = new Array();
WOMT_aThesenLinks[12] = new Array();
WOMT_aThesenVotematch[12] = "0";
WOMT_aThesenVotematchId[12] = "0";
WOMT_aThesen[12][0] = new Array();
WOMT_aThesenLinks[12][0] = new Array();
WOMT_aThesenLinks[12][0][0] = new Array();
WOMT_aThesenLinks[12][0][0][0] = "BAföG (Lexikon der Wirtschaft, bpb.de)";
WOMT_aThesenLinks[12][0][0][1] =
  "https://www.bpb.de/nachschlagen/lexika/lexikon-der-wirtschaft/18789/bafoeg";
WOMT_aThesenLinks[12][0][0][2] = "url";
WOMT_aThesenLinks[12][0][1] = new Array();
WOMT_aThesenLinks[12][0][1][0] =
  "Ralf Pauli: Ausgebrannt und pleite - Reicht das BAföG? (fluter.de)";
WOMT_aThesenLinks[12][0][1][1] = "https://www.fluter.de/bafoeg-erhoehung-2019";
WOMT_aThesenLinks[12][0][1][2] = "url";
WOMT_aThesenLinks[12][0][2] = new Array();
WOMT_aThesenLinks[12][0][2][0] =
  "Rainer Geißler: Bildungsexpansion und Bildungschancen (Informationen zur politischen Bildung: Sozialer Wandel in Deutschland, bpb.de)";
WOMT_aThesenLinks[12][0][2][1] =
  "https://www.bpb.de/izpb/198031/bildungsexpansion-und-bildungschancen";
WOMT_aThesenLinks[12][0][2][2] = "url";
WOMT_aThesen[12][0][0] = "Elternunabhängiges BAföG";
WOMT_aThesen[12][0][1] =
  "Studentinnen und Studenten sollen BAföG unabhängig vom Einkommen ihrer Eltern erhalten.";
WOMT_aThesenThema[12] = "0";
WOMT_aThesenParteien[12] = new Array();

WOMT_aThesen[13] = new Array();
WOMT_aThesenLinks[13] = new Array();
WOMT_aThesenVotematch[13] = "0";
WOMT_aThesenVotematchId[13] = "0";
WOMT_aThesen[13][0] = new Array();
WOMT_aThesenLinks[13][0] = new Array();
WOMT_aThesenLinks[13][0][0] = new Array();
WOMT_aThesenLinks[13][0][0][0] =
  "Doppelte Staatsangehörigkeit (Glossar Migration – Integration – Flucht & Asyl, bpb.de)";
WOMT_aThesenLinks[13][0][0][1] =
  "https://www.bpb.de/nachschlagen/lexika/270359/doppelte-staatsbuergerschaft";
WOMT_aThesenLinks[13][0][0][2] = "url";
WOMT_aThesenLinks[13][0][1] = new Array();
WOMT_aThesenLinks[13][0][1][0] =
  "Susanne Worbs: Doppelte Staatsangehörigkeit in Deutschland: Zahlen und Fakten (Länderprofile Migration: Daten - Geschichte - Politik, bpb.de) ";
WOMT_aThesenLinks[13][0][1][1] =
  "https://www.bpb.de/gesellschaft/migration/laenderprofile/254191/doppelte-staatsangehoerigkeit-zahlen-und-fakten";
WOMT_aThesenLinks[13][0][1][2] = "url";
WOMT_aThesenLinks[13][0][2] = new Array();
WOMT_aThesenLinks[13][0][2][0] =
  "Vera Hanewinkel, Jochen Oltmer: Staatsbürgerschaft und Entwicklung der Einbürgerungszahlen in Deutschland (Länderprofile Migration: Daten - Geschichte - Politik, bpb.de)";
WOMT_aThesenLinks[13][0][2][1] =
  "https://www.bpb.de/gesellschaft/migration/laenderprofile/256274/staatsbuergerschaft-und-einbuergerungszahlen";
WOMT_aThesenLinks[13][0][2][2] = "url";
WOMT_aThesen[13][0][0] = "Doppelte Staatsbürgerschaft";
WOMT_aThesen[13][0][1] =
  "In Deutschland soll es generell möglich sein, neben der deutschen eine zweite Staatsbürgerschaft zu haben.";
WOMT_aThesenThema[13] = "0";
WOMT_aThesenParteien[13] = new Array();

WOMT_aThesen[14] = new Array();
WOMT_aThesenLinks[14] = new Array();
WOMT_aThesenVotematch[14] = "0";
WOMT_aThesenVotematchId[14] = "0";
WOMT_aThesen[14][0] = new Array();
WOMT_aThesenLinks[14][0] = new Array();
WOMT_aThesenLinks[14][0][0] = new Array();
WOMT_aThesenLinks[14][0][0][0] =
  "Debatte: Sprache und Geschlecht (Dossier: Geschlechtliche Vielfalt - trans*, bpb.de)";
WOMT_aThesenLinks[14][0][0][1] =
  "https://www.bpb.de/gesellschaft/gender/geschlechtliche-vielfalt-trans/269887/debatte-sprache-und-geschlecht";
WOMT_aThesenLinks[14][0][0][2] = "url";
WOMT_aThesenLinks[14][0][1] = new Array();
WOMT_aThesenLinks[14][0][1][0] = "APuZ: Geschlechtsidentität (bpb.de)";
WOMT_aThesenLinks[14][0][1][1] =
  "https://www.bpb.de/apuz/135427/geschlechtsidentitaet";
WOMT_aThesenLinks[14][0][1][2] = "url";
WOMT_aThesenLinks[14][0][2] = new Array();
WOMT_aThesenLinks[14][0][2][0] = "Thema: Gender (fluter.de)";
WOMT_aThesenLinks[14][0][2][1] = "https://www.fluter.de/gender";
WOMT_aThesenLinks[14][0][2][2] = "url";
WOMT_aThesen[14][0][0] =
  "Sprachliche Berücksichtigung von Geschlechtsidentitäten";
WOMT_aThesen[14][0][1] =
  "Bundesbehörden sollen in ihren Veröffentlichungen unterschiedliche Geschlechtsidentitäten sprachlich berücksichtigen.";
WOMT_aThesenThema[14] = "0";
WOMT_aThesenParteien[14] = new Array();

WOMT_aThesen[15] = new Array();
WOMT_aThesenLinks[15] = new Array();
WOMT_aThesenVotematch[15] = "0";
WOMT_aThesenVotematchId[15] = "0";
WOMT_aThesen[15][0] = new Array();
WOMT_aThesenLinks[15][0] = new Array();
WOMT_aThesenLinks[15][0][0] = new Array();
WOMT_aThesenLinks[15][0][0][0] =
  "Debatte: Wem Nord Stream 2 nützen und wem es schaden könnte (eurotopics.net)";
WOMT_aThesenLinks[15][0][0][1] =
  "https://www.eurotopics.net/de/264928/wem-nord-stream-2-nuetzen-und-wem-es-schaden-koennte";
WOMT_aThesenLinks[15][0][0][2] = "url";
WOMT_aThesenLinks[15][0][1] = new Array();
WOMT_aThesenLinks[15][0][1][0] =
  "Felicitas Wilke: Rohrkapierer - Warum die Pipeline Nord Stream 2 so umstritten ist (fluter.de)";
WOMT_aThesenLinks[15][0][1][1] = "https://www.fluter.de/nord-stream-2-konflikt";
WOMT_aThesenLinks[15][0][1][2] = "url";
WOMT_aThesenLinks[15][0][2] = new Array();
WOMT_aThesenLinks[15][0][2][0] =
  "Kirsten Westphal: Zwischen Green Deal und Nord Stream. Europäische Energiepolitik 2020 (APuZ: Europäische Baustellen, bpb.de)";
WOMT_aThesenLinks[15][0][2][1] =
  "https://www.bpb.de/apuz/310565/europaeische-energiepolitik-2020";
WOMT_aThesenLinks[15][0][2][2] = "url";
WOMT_aThesen[15][0][0] = "Nord Stream 2";
WOMT_aThesen[15][0][1] =
  "Die Ostsee-Pipeline „Nord Stream 2“, die Gas von Russland nach Deutschland transportiert, soll wie geplant in Betrieb gehen dürfen.";
WOMT_aThesenThema[15] = "0";
WOMT_aThesenParteien[15] = new Array();

WOMT_aThesen[16] = new Array();
WOMT_aThesenLinks[16] = new Array();
WOMT_aThesenVotematch[16] = "0";
WOMT_aThesenVotematchId[16] = "0";
WOMT_aThesen[16][0] = new Array();
WOMT_aThesenLinks[16][0] = new Array();
WOMT_aThesenLinks[16][0][0] = new Array();
WOMT_aThesenLinks[16][0][0][0] =
  "Vor 30 Jahren: Bundestag beschließt Solidaritätszuschlag (Hintergrund aktuell, bpb.de)";
WOMT_aThesenLinks[16][0][0][1] =
  "https://www.bpb.de/politik/hintergrund-aktuell/333149/vor-30-jahren-bundestag-beschliesst-solidaritaetszuschlag";
WOMT_aThesenLinks[16][0][0][2] = "url";
WOMT_aThesenLinks[16][0][1] = new Array();
WOMT_aThesenLinks[16][0][1][0] =
  "Henrik Scheller: Integrationsbeitrag und Verteilungskonflikt. Geschichte und Perspektiven des Solidaritätszuschlags (APuZ: Deutsche Einheit, bpb.de)";
WOMT_aThesenLinks[16][0][1][1] =
  "https://www.bpb.de/apuz/312267/geschichte-und-perspektiven-des-solidaritaetszuschlags";
WOMT_aThesenLinks[16][0][1][2] = "url";
WOMT_aThesenLinks[16][0][2] = new Array();
WOMT_aThesenLinks[16][0][2][0] =
  "Heinrich Best, Ronald Gebauer: Die Kosten und Erträge der Wiedervereinigung Deutschlands (Dossier: Lange Wege der Deutschen Einheit, bpb.de)";
WOMT_aThesenLinks[16][0][2][1] =
  "https://www.bpb.de/geschichte/deutsche-einheit/lange-wege-der-deutschen-einheit/47534/kosten-der-einheit";
WOMT_aThesenLinks[16][0][2][2] = "url";
WOMT_aThesen[16][0][0] = "Abschaffung des Solidaritätszuschlags";
WOMT_aThesen[16][0][1] =
  "Der Solidaritätszuschlag soll vollständig abgeschafft werden.";
WOMT_aThesenThema[16] = "0";
WOMT_aThesenParteien[16] = new Array();

WOMT_aThesen[17] = new Array();
WOMT_aThesenLinks[17] = new Array();
WOMT_aThesenVotematch[17] = "0";
WOMT_aThesenVotematchId[17] = "0";
WOMT_aThesen[17][0] = new Array();
WOMT_aThesenLinks[17][0] = new Array();
WOMT_aThesenLinks[17][0][0] = new Array();
WOMT_aThesenLinks[17][0][0][0] = "Beamte (Rechtslexikon, bpb.de)";
WOMT_aThesenLinks[17][0][0][1] =
  "https://www.bpb.de/nachschlagen/lexika/recht-a-z/323097/beamte";
WOMT_aThesenLinks[17][0][0][2] = "url";
WOMT_aThesenLinks[17][0][1] = new Array();
WOMT_aThesenLinks[17][0][1][0] =
  "Debatte: Ist ein Kopftuchverbot im Job diskriminierend? (eurotopics.net)";
WOMT_aThesenLinks[17][0][1][1] =
  "https://www.eurotopics.net/de/176064/ist-ein-kopftuchverbot-im-job-diskriminierend";
WOMT_aThesenLinks[17][0][1][2] = "url";
WOMT_aThesenLinks[17][0][2] = new Array();
WOMT_aThesenLinks[17][0][2][0] =
  "Debatte: EuGH positioniert sich zum Kopftuchverbot (eurotopics.net)";
WOMT_aThesenLinks[17][0][2][1] =
  "https://www.eurotopics.net/de/160047/eugh-positioniert-sich-zum-kopftuchverbot";
WOMT_aThesenLinks[17][0][2][2] = "url";
WOMT_aThesen[17][0][0] = "Kopftuch im Dienst";
WOMT_aThesen[17][0][1] =
  "Das Tragen eines Kopftuchs soll Beamtinnen im Dienst generell erlaubt sein.";
WOMT_aThesenThema[17] = "0";
WOMT_aThesenParteien[17] = new Array();

WOMT_aThesen[18] = new Array();
WOMT_aThesenLinks[18] = new Array();
WOMT_aThesenVotematch[18] = "0";
WOMT_aThesenVotematchId[18] = "0";
WOMT_aThesen[18][0] = new Array();
WOMT_aThesenLinks[18][0] = new Array();
WOMT_aThesenLinks[18][0][0] = new Array();
WOMT_aThesenLinks[18][0][0][0] =
  "Weert Canzler: Mobilität in Zeiten des Klimawandels (Datenreport 2021, bpb.de)";
WOMT_aThesenLinks[18][0][0][1] =
  "https://www.bpb.de/nachschlagen/datenreport-2021/umwelt-energie-und-mobilitaet/330367/mobilitaet-in-zeiten-des-klimawandels";
WOMT_aThesenLinks[18][0][0][2] = "url";
WOMT_aThesenLinks[18][0][1] = new Array();
WOMT_aThesenLinks[18][0][1][0] =
  "Debatte: Bald nur noch Elektroautos auf den Straßen? (eurotopics.net)";
WOMT_aThesenLinks[18][0][1][1] =
  "https://www.eurotopics.net/de/182310/bald-nur-noch-elektroautos-auf-den-strassen";
WOMT_aThesenLinks[18][0][1][2] = "url";
WOMT_aThesenLinks[18][0][2] = new Array();
WOMT_aThesenLinks[18][0][2][0] =
  "Birgit Priemer: Mit dem E-Auto in die Zukunft? Chancen und Herausforderungen der Elektromobilität (APuZ: Das Auto, bpb.de)";
WOMT_aThesenLinks[18][0][2][1] =
  "https://www.bpb.de/apuz/298746/mit-dem-e-auto-in-die-zukunft";
WOMT_aThesenLinks[18][0][2][2] = "url";
WOMT_aThesen[18][0][0] = "Verbrennungsmotor";
WOMT_aThesen[18][0][1] =
  "Die Zulassung von neuen Autos mit Verbrennungsmotor soll auch langfristig möglich sein.";
WOMT_aThesenThema[18] = "0";
WOMT_aThesenParteien[18] = new Array();

WOMT_aThesen[19] = new Array();
WOMT_aThesenLinks[19] = new Array();
WOMT_aThesenVotematch[19] = "0";
WOMT_aThesenVotematchId[19] = "0";
WOMT_aThesen[19][0] = new Array();
WOMT_aThesenLinks[19][0] = new Array();
WOMT_aThesenLinks[19][0][0] = new Array();
WOMT_aThesenLinks[19][0][0][0] =
  "Bildungspolitik/Bildungswesen (Handwörterbuch des politischen Systems, bpb.de)";
WOMT_aThesenLinks[19][0][0][1] =
  "https://www.bpb.de/nachschlagen/lexika/handwoerterbuch-politisches-system/201986/bildungspolitik-bildungswesen";
WOMT_aThesenLinks[19][0][0][2] = "url";
WOMT_aThesenLinks[19][0][1] = new Array();
WOMT_aThesenLinks[19][0][1][0] =
  "Gerd Hepp: Wie der Staat das Bildungswesen prägt (Dossier: Bildung, bpb.de)";
WOMT_aThesenLinks[19][0][1][1] =
  "https://www.bpb.de/gesellschaft/bildung/zukunft-bildung/145238/staat-als-akteur";
WOMT_aThesenLinks[19][0][1][2] = "url";
WOMT_aThesenLinks[19][0][2] = new Array();
WOMT_aThesenLinks[19][0][2][0] = "APuZ: Schule (bpb.de)";
WOMT_aThesenLinks[19][0][2][1] = "https://www.bpb.de/apuz/schule-2020/";
WOMT_aThesenLinks[19][0][2][2] = "url";
WOMT_aThesen[19][0][0] = "Schulpolitik";
WOMT_aThesen[19][0][1] =
  "Der Bund soll mehr Zuständigkeiten in der Schulpolitik erhalten.";
WOMT_aThesenThema[19] = "0";
WOMT_aThesenParteien[19] = new Array();

WOMT_aThesen[20] = new Array();
WOMT_aThesenLinks[20] = new Array();
WOMT_aThesenVotematch[20] = "0";
WOMT_aThesenVotematchId[20] = "0";
WOMT_aThesen[20][0] = new Array();
WOMT_aThesenLinks[20][0] = new Array();
WOMT_aThesenLinks[20][0][0] = new Array();
WOMT_aThesenLinks[20][0][0][0] =
  "Was heißt Antisemitismus? (Dossier: Antisemitismus, bpb.de)";
WOMT_aThesenLinks[20][0][0][1] =
  "https://www.bpb.de/politik/extremismus/antisemitismus/37944/was-heisst-antisemitismus";
WOMT_aThesenLinks[20][0][0][2] = "url";
WOMT_aThesenLinks[20][0][1] = new Array();
WOMT_aThesenLinks[20][0][1][0] =
  "Der Feindschaft begegnen (Dossier: Antisemitismus, bpb.de)";
WOMT_aThesenLinks[20][0][1][1] =
  "https://www.bpb.de/politik/extremismus/antisemitismus/37979/der-feindschaft-begegnen";
WOMT_aThesenLinks[20][0][1][2] = "url";
WOMT_aThesenLinks[20][0][2] = new Array();
WOMT_aThesenLinks[20][0][2][0] =
  "Interview: Voller Neid und Missgunst - Über die Ursprünge des deutschen Antisemitismus (fluter.de)";
WOMT_aThesenLinks[20][0][2][1] =
  "https://www.fluter.de/voller-neid-und-missgunst";
WOMT_aThesenLinks[20][0][2][2] = "url";
WOMT_aThesen[20][0][0] = "Antisemitismus";
WOMT_aThesen[20][0][1] =
  "Der Bund soll Projekte zur Bekämpfung des Antisemitismus stärker finanziell unterstützen.";
WOMT_aThesenThema[20] = "0";
WOMT_aThesenParteien[20] = new Array();

WOMT_aThesen[21] = new Array();
WOMT_aThesenLinks[21] = new Array();
WOMT_aThesenVotematch[21] = "0";
WOMT_aThesenVotematchId[21] = "0";
WOMT_aThesen[21][0] = new Array();
WOMT_aThesenLinks[21][0] = new Array();
WOMT_aThesenLinks[21][0][0] = new Array();
WOMT_aThesenLinks[21][0][0][0] =
  "Debatte: 5G-Ausbau: Folgt Europa Londons Kehrtwende (eurotopics.net)";
WOMT_aThesenLinks[21][0][0][1] =
  "https://www.eurotopics.net/de/244265/5g-ausbau-folgt-europa-londons-kehrtwende";
WOMT_aThesenLinks[21][0][0][2] = "url";
WOMT_aThesenLinks[21][0][1] = new Array();
WOMT_aThesenLinks[21][0][1][0] =
  "Saskia Hieber: Chinas Sicherheitspolitik (Dossier: China, bpb.de) ";
WOMT_aThesenLinks[21][0][1][1] =
  "https://www.bpb.de/internationales/asien/china/336927/chinas-sicherheitspolitik";
WOMT_aThesenLinks[21][0][1][2] = "url";
WOMT_aThesenLinks[21][0][2] = new Array();
WOMT_aThesenLinks[21][0][2][0] =
  "Eike Kühl: Auf Speed - Was ist der 5G-Ausbau  (fluter.de)";
WOMT_aThesenLinks[21][0][2][1] = "https://www.fluter.de/was-ist-5G-ausbau";
WOMT_aThesenLinks[21][0][2][2] = "url";
WOMT_aThesen[21][0][0] = "Aufträge an chinesische Firmen";
WOMT_aThesen[21][0][1] =
  "Chinesische Firmen sollen keine Aufträge für den Ausbau der Kommunikationsinfrastruktur in Deutschland erhalten dürfen.";
WOMT_aThesenThema[21] = "0";
WOMT_aThesenParteien[21] = new Array();

WOMT_aThesen[22] = new Array();
WOMT_aThesenLinks[22] = new Array();
WOMT_aThesenVotematch[22] = "0";
WOMT_aThesenVotematchId[22] = "0";
WOMT_aThesen[22][0] = new Array();
WOMT_aThesenLinks[22][0] = new Array();
WOMT_aThesenLinks[22][0][0] = new Array();
WOMT_aThesenLinks[22][0][0][0] =
  "Kirchensteuer (Lexikon der Wirtschaft, bpb.de)";
WOMT_aThesenLinks[22][0][0][1] =
  "https://www.bpb.de/nachschlagen/lexika/lexikon-der-wirtschaft/19784/kirchensteuer";
WOMT_aThesenLinks[22][0][0][2] = "url";
WOMT_aThesenLinks[22][0][1] = new Array();
WOMT_aThesenLinks[22][0][1][0] =
  "Horst Pötzsch: Kirchen (Dossier: Die deutsche Demokratie, bpb.de)";
WOMT_aThesenLinks[22][0][1][1] =
  "https://www.bpb.de/politik/grundfragen/deutsche-demokratie/39322/kirchen";
WOMT_aThesenLinks[22][0][1][2] = "url";
WOMT_aThesenLinks[22][0][2] = new Array();
WOMT_aThesenLinks[22][0][2][0] =
  "Katholische und evangelische Kirche (Zahlen und Fakten: Die soziale Situation in Deutschland, bpb.de)";
WOMT_aThesenLinks[22][0][2][1] =
  "https://www.bpb.de/nachschlagen/zahlen-und-fakten/soziale-situation-in-deutschland/61565/kirche";
WOMT_aThesenLinks[22][0][2][2] = "url";
WOMT_aThesen[22][0][0] = "Kirchensteuer";
WOMT_aThesen[22][0][1] =
  "Der Staat soll weiterhin für Religionsgemeinschaften die Kirchensteuer einziehen.";
WOMT_aThesenThema[22] = "0";
WOMT_aThesenParteien[22] = new Array();

WOMT_aThesen[23] = new Array();
WOMT_aThesenLinks[23] = new Array();
WOMT_aThesenVotematch[23] = "0";
WOMT_aThesenVotematchId[23] = "0";
WOMT_aThesen[23][0] = new Array();
WOMT_aThesenLinks[23][0] = new Array();
WOMT_aThesenLinks[23][0][0] = new Array();
WOMT_aThesenLinks[23][0][0][0] = "Drogen (Das junge Politiklexikon, bpb.de)";
WOMT_aThesenLinks[23][0][0][1] =
  "https://www.bpb.de/nachschlagen/lexika/das-junge-politik-lexikon/320130/drogen";
WOMT_aThesenLinks[23][0][0][2] = "url";
WOMT_aThesenLinks[23][0][1] = new Array();
WOMT_aThesenLinks[23][0][1][0] = "fluter: Drogen (fluter.de)";
WOMT_aThesenLinks[23][0][1][1] = "https://www.fluter.de/heft37";
WOMT_aThesenLinks[23][0][1][2] = "url";
WOMT_aThesenLinks[23][0][2] = new Array();
WOMT_aThesenLinks[23][0][2][0] =
  "Henning Schmidt-Semisch: Von der Abstinenz zur Akzeptanz. Wegmarken der deutschen Drogenpolitik und Suchthilfe (APuZ: Rausch und Drogen, bpb.de)";
WOMT_aThesenLinks[23][0][2][1] =
  "https://www.bpb.de/apuz/rausch-und-drogen-2020/321820/wegmarken-der-deutschen-drogenpolitik-und-suchthilfe";
WOMT_aThesenLinks[23][0][2][2] = "url";
WOMT_aThesen[23][0][0] = "Verkauf von Cannabis";
WOMT_aThesen[23][0][1] =
  "Der kontrollierte Verkauf von Cannabis soll generell erlaubt sein.";
WOMT_aThesenThema[23] = "0";
WOMT_aThesenParteien[23] = new Array();

WOMT_aThesen[24] = new Array();
WOMT_aThesenLinks[24] = new Array();
WOMT_aThesenVotematch[24] = "0";
WOMT_aThesenVotematchId[24] = "0";
WOMT_aThesen[24][0] = new Array();
WOMT_aThesenLinks[24][0] = new Array();
WOMT_aThesenLinks[24][0][0] = new Array();
WOMT_aThesenLinks[24][0][0][0] =
  "Austritt/Ausschluss aus der EU (Europalexikon, bpb.de)";
WOMT_aThesenLinks[24][0][0][1] =
  "https://www.bpb.de/nachschlagen/lexika/das-europalexikon/176694/austritt-ausschluss-aus-der-eu";
WOMT_aThesenLinks[24][0][0][2] = "url";
WOMT_aThesenLinks[24][0][1] = new Array();
WOMT_aThesenLinks[24][0][1][0] =
  "Europäische Union (KOSMOS Welt-Almanach, bpb.de)";
WOMT_aThesenLinks[24][0][1][1] =
  "https://www.bpb.de/nachschlagen/lexika/kosmos-weltalmanach/244083/europaeische-union-eu";
WOMT_aThesenLinks[24][0][1][2] = "url";
WOMT_aThesenLinks[24][0][2] = new Array();
WOMT_aThesenLinks[24][0][2][0] =
  "Debatte: Wie schwach ist die EU in der Krise? (eurotopics.net)";
WOMT_aThesenLinks[24][0][2][1] =
  "https://www.eurotopics.net/de/259405/wie-schwach-ist-die-eu-in-der-krise";
WOMT_aThesenLinks[24][0][2][2] = "url";
WOMT_aThesen[24][0][0] = "Austritt aus der EU";
WOMT_aThesen[24][0][1] =
  "Deutschland soll aus der Europäischen Union austreten.";
WOMT_aThesenThema[24] = "0";
WOMT_aThesenParteien[24] = new Array();

WOMT_aThesen[25] = new Array();
WOMT_aThesenLinks[25] = new Array();
WOMT_aThesenVotematch[25] = "0";
WOMT_aThesenVotematchId[25] = "0";
WOMT_aThesen[25][0] = new Array();
WOMT_aThesenLinks[25][0] = new Array();
WOMT_aThesenLinks[25][0][0] = new Array();
WOMT_aThesenLinks[25][0][0][0] =
  "Ulrike Lembke: Neue Modelle: Die Idee eines Paritätsgesetzes in Deutschland (Dossier: Frauenwahlrecht, bpb.de)";
WOMT_aThesenLinks[25][0][0][1] =
  "https://www.bpb.de/geschichte/deutsche-geschichte/frauenwahlrecht/279363/die-idee-eines-paritaetsgesetzes";
WOMT_aThesenLinks[25][0][0][2] = "url";
WOMT_aThesenLinks[25][0][1] = new Array();
WOMT_aThesenLinks[25][0][1][0] =
  "Gewählte Abgeordnete (Zahlen und Fakten: Bundestagswahlen, bpb.de)";
WOMT_aThesenLinks[25][0][1][1] =
  "https://www.bpb.de/nachschlagen/zahlen-und-fakten/bundestagswahlen/280221/gewaehlte-abgeordnete";
WOMT_aThesenLinks[25][0][1][2] = "url";
WOMT_aThesenLinks[25][0][2] = new Array();
WOMT_aThesenLinks[25][0][2][0] =
  "Katrin Menke, Ute Klammer: Gender-Datenreport (Informationen zur politischen Bildung: Geschlechterdemokratie, bpb.de)";
WOMT_aThesenLinks[25][0][2][1] =
  "https://www.bpb.de/izpb/307426/gender-datenreport";
WOMT_aThesenLinks[25][0][2][2] = "url";
WOMT_aThesen[25][0][0] = "Frauen und Männer auf Landeslisten";
WOMT_aThesen[25][0][1] =
  "Die Landeslisten der Parteien für die Wahlen zum Deutschen Bundestag sollen abwechselnd mit Frauen und Männern besetzt werden müssen.";
WOMT_aThesenThema[25] = "0";
WOMT_aThesenParteien[25] = new Array();

WOMT_aThesen[26] = new Array();
WOMT_aThesenLinks[26] = new Array();
WOMT_aThesenVotematch[26] = "0";
WOMT_aThesenVotematchId[26] = "0";
WOMT_aThesen[26][0] = new Array();
WOMT_aThesenLinks[26][0] = new Array();
WOMT_aThesenLinks[26][0][0] = new Array();
WOMT_aThesenLinks[26][0][0][0] = "Fallpauschale (Rechtslexikon, bpb.de)";
WOMT_aThesenLinks[26][0][0][1] =
  "https://www.bpb.de/nachschlagen/lexika/recht-a-z/323374/fallpauschale";
WOMT_aThesenLinks[26][0][0][2] = "url";
WOMT_aThesenLinks[26][0][1] = new Array();
WOMT_aThesenLinks[26][0][1][0] =
  "Thomas Gerlinger: Die Vergütung von Krankenhausleistungen (Dossier: Gesundheitspolitik, bpb.de)";
WOMT_aThesenLinks[26][0][1][1] =
  "https://www.bpb.de/politik/innenpolitik/gesundheitspolitik/72027/verguetung-von-krankenhausleistungen";
WOMT_aThesenLinks[26][0][1][2] = "url";
WOMT_aThesenLinks[26][0][2] = new Array();
WOMT_aThesenLinks[26][0][2][0] = "Dossier: Gesundheitspolitik (bpb.de)";
WOMT_aThesenLinks[26][0][2][1] =
  "https://www.bpb.de/politik/innenpolitik/gesundheitspolitik/";
WOMT_aThesenLinks[26][0][2][2] = "url";
WOMT_aThesen[26][0][0] = "Abrechnung über Fallpauschalen";
WOMT_aThesen[26][0][1] =
  "Stationäre Behandlungen im Krankenhaus sollen weiterhin über eine Fallpauschale abgerechnet werden.";
WOMT_aThesenThema[26] = "0";
WOMT_aThesenParteien[26] = new Array();

WOMT_aThesen[27] = new Array();
WOMT_aThesenLinks[27] = new Array();
WOMT_aThesenVotematch[27] = "0";
WOMT_aThesenVotematchId[27] = "0";
WOMT_aThesen[27][0] = new Array();
WOMT_aThesenLinks[27][0] = new Array();
WOMT_aThesenLinks[27][0][0] = new Array();
WOMT_aThesenLinks[27][0][0][0] =
  "Vermögenssteuer (Das junge Politiklexikon, bpb.de)";
WOMT_aThesenLinks[27][0][0][1] =
  "https://www.bpb.de/nachschlagen/lexika/das-junge-politik-lexikon/321318/vermoegenssteuer";
WOMT_aThesenLinks[27][0][0][2] = "url";
WOMT_aThesenLinks[27][0][1] = new Array();
WOMT_aThesenLinks[27][0][1][0] =
  "Vermögensverteilung (Zahlen und Fakten: Die soziale Situation in Deutschland, bpb.de)";
WOMT_aThesenLinks[27][0][1][1] =
  "https://www.bpb.de/nachschlagen/zahlen-und-fakten/soziale-situation-in-deutschland/61781/vermoegensverteilung";
WOMT_aThesenLinks[27][0][1][2] = "url";
WOMT_aThesenLinks[27][0][2] = new Array();
WOMT_aThesenLinks[27][0][2][0] =
  "Private Vermögen – Höhe, Entwicklung und Verteilung (Datenreport 2021, bpb.de)";
WOMT_aThesenLinks[27][0][2][1] =
  "https://www.bpb.de/nachschlagen/datenreport-2021/private-haushalte-einkommen-und-konsum/329958/private-vermoegen-hoehe-entwicklung-und-verteilung";
WOMT_aThesenLinks[27][0][2][2] = "url";
WOMT_aThesen[27][0][0] = "Steuer auf hohe Vermögen";
WOMT_aThesen[27][0][1] =
  "Auf hohe Vermögen soll wieder eine Steuer erhoben werden.";
WOMT_aThesenThema[27] = "0";
WOMT_aThesenParteien[27] = new Array();

WOMT_aThesen[28] = new Array();
WOMT_aThesenLinks[28] = new Array();
WOMT_aThesenVotematch[28] = "0";
WOMT_aThesenVotematchId[28] = "0";
WOMT_aThesen[28][0] = new Array();
WOMT_aThesenLinks[28][0] = new Array();
WOMT_aThesenLinks[28][0][0] = new Array();
WOMT_aThesenLinks[28][0][0][0] =
  "Carsten Frank: Technische Überwachungsmaßnahmen (Dossier: Innere Sicherheit, bpb.de)";
WOMT_aThesenLinks[28][0][0][1] =
  "https://www.bpb.de/politik/innenpolitik/innere-sicherheit/125982/technische-ueberwachungsmassnahmen";
WOMT_aThesenLinks[28][0][0][2] = "url";
WOMT_aThesenLinks[28][0][1] = new Array();
WOMT_aThesenLinks[28][0][1][0] =
  "Debatte: Gesichtserkennung: Harmloses Pilotprojekt? (eurotopics.net)";
WOMT_aThesenLinks[28][0][1][1] =
  "https://www.eurotopics.net/de/185001/gesichtserkennung-harmloses-pilotprojekt";
WOMT_aThesenLinks[28][0][1][2] = "url";
WOMT_aThesenLinks[28][0][2] = new Array();
WOMT_aThesenLinks[28][0][2][0] =
  "Ariana Dongus: Nur nicht das Gesicht verlieren - Wo wird Gesichtserkennung im Alltag eingesetzt? (fluter.de)";
WOMT_aThesenLinks[28][0][2][1] =
  "https://www.fluter.de/gesichtserkennung-im-alltag";
WOMT_aThesenLinks[28][0][2][2] = "url";
WOMT_aThesen[28][0][0] = "Gesichtserkennung bei Videoüberwachung";
WOMT_aThesen[28][0][1] =
  "Bei der Videoüberwachung öffentlicher Plätze soll Gesichtserkennungssoftware eingesetzt werden dürfen.";
WOMT_aThesenThema[28] = "0";
WOMT_aThesenParteien[28] = new Array();

WOMT_aThesen[29] = new Array();
WOMT_aThesenLinks[29] = new Array();
WOMT_aThesenVotematch[29] = "0";
WOMT_aThesenVotematchId[29] = "0";
WOMT_aThesen[29][0] = new Array();
WOMT_aThesenLinks[29][0] = new Array();
WOMT_aThesenLinks[29][0][0] = new Array();
WOMT_aThesenLinks[29][0][0][0] =
  "Debatte: Ehegattensplitting (Dossier: Familienpolitik, bpb.de)";
WOMT_aThesenLinks[29][0][0][1] =
  "https://www.bpb.de/politik/innenpolitik/familienpolitik/245284/ehegattensplitting";
WOMT_aThesenLinks[29][0][0][2] = "url";
WOMT_aThesenLinks[29][0][1] = new Array();
WOMT_aThesenLinks[29][0][1][0] =
  "Paare (Zahlen und Fakten: Die soziale Situation in Deutschland, bpb.de)";
WOMT_aThesenLinks[29][0][1][1] =
  "https://www.bpb.de/nachschlagen/zahlen-und-fakten/soziale-situation-in-deutschland/61575/paare";
WOMT_aThesenLinks[29][0][1][2] = "url";
WOMT_aThesenLinks[29][0][2] = new Array();
WOMT_aThesenLinks[29][0][2][0] =
  "Martin Bujard: Familienpolitische Geldleistungen (Dossier: Familienpolitik, bpb.de)";
WOMT_aThesenLinks[29][0][2][1] =
  "https://www.bpb.de/politik/innenpolitik/familienpolitik/193715/familienpolitische-geldleistungen";
WOMT_aThesenLinks[29][0][2][2] = "url";
WOMT_aThesen[29][0][0] = "Ehepaare ohne Kinder";
WOMT_aThesen[29][0][1] =
  "Auch Ehepaare ohne Kinder sollen weiterhin steuerlich begünstigt werden.";
WOMT_aThesenThema[29] = "0";
WOMT_aThesenParteien[29] = new Array();

WOMT_aThesen[30] = new Array();
WOMT_aThesenLinks[30] = new Array();
WOMT_aThesenVotematch[30] = "0";
WOMT_aThesenVotematchId[30] = "0";
WOMT_aThesen[30][0] = new Array();
WOMT_aThesenLinks[30][0] = new Array();
WOMT_aThesenLinks[30][0][0] = new Array();
WOMT_aThesenLinks[30][0][0][0] =
  "Landwirtschaft in Deutschland (Dossier: Landwirtschaft, bpb.de)";
WOMT_aThesenLinks[30][0][0][1] =
  "https://www.bpb.de/gesellschaft/umwelt/landwirtschaft/319005/landwirtschaft-in-deutschland";
WOMT_aThesenLinks[30][0][0][2] = "url";
WOMT_aThesenLinks[30][0][1] = new Array();
WOMT_aThesenLinks[30][0][1][0] =
  "Oliver Gehrs: Alles Feld der Welt (fluter.de)";
WOMT_aThesenLinks[30][0][1][1] =
  "https://www.fluter.de/geschichte-der-landwirtschaft";
WOMT_aThesenLinks[30][0][1][2] = "url";
WOMT_aThesenLinks[30][0][2] = new Array();
WOMT_aThesenLinks[30][0][2][0] =
  "Debatte: EU einig über Agrarreform: Ein Systemwechsel? (eurotopics.net)";
WOMT_aThesenLinks[30][0][2][1] =
  "https://www.eurotopics.net/de/249874/eu-einig-ueber-agrarreform-ein-systemwechsel";
WOMT_aThesenLinks[30][0][2][2] = "url";
WOMT_aThesen[30][0][0] = "Ökologische Landwirtschaft";
WOMT_aThesen[30][0][1] =
  "Ökologische Landwirtschaft soll stärker gefördert werden als konventionelle Landwirtschaft.";
WOMT_aThesenThema[30] = "0";
WOMT_aThesenParteien[30] = new Array();

WOMT_aThesen[31] = new Array();
WOMT_aThesenLinks[31] = new Array();
WOMT_aThesenVotematch[31] = "0";
WOMT_aThesenVotematchId[31] = "0";
WOMT_aThesen[31][0] = new Array();
WOMT_aThesenLinks[31][0] = new Array();
WOMT_aThesenLinks[31][0][0] = new Array();
WOMT_aThesenLinks[31][0][0][0] = "Islam (Das junge Politiklexikon, bpb.de)";
WOMT_aThesenLinks[31][0][0][1] =
  "https://www.bpb.de/nachschlagen/lexika/das-junge-politik-lexikon/320553/islam";
WOMT_aThesenLinks[31][0][0][2] = "url";
WOMT_aThesenLinks[31][0][1] = new Array();
WOMT_aThesenLinks[31][0][1][0] =
  "Religion (Zahlen und Fakten: Die soziale Situation in Deutschland, bpb.de)";
WOMT_aThesenLinks[31][0][1][1] =
  "https://www.bpb.de/nachschlagen/zahlen-und-fakten/soziale-situation-in-deutschland/145148/religion";
WOMT_aThesenLinks[31][0][1][2] = "url";
WOMT_aThesenLinks[31][0][2] = new Array();
WOMT_aThesenLinks[31][0][2][0] =
  "Hans Michael Heinig: Staat und Religion in Deutschland. Historische und aktuelle Dynamiken im Religionsrecht (APuZ: Religionspolitik, bpb.de)";
WOMT_aThesenLinks[31][0][2][1] =
  "https://www.bpb.de/apuz/272101/historische-und-aktuelle-dynamiken-im-religionsrecht";
WOMT_aThesenLinks[31][0][2][2] = "url";
WOMT_aThesen[31][0][0] = "Islamische Verbände";
WOMT_aThesen[31][0][1] =
  "Islamische Verbände sollen als Religionsgemeinschaften staatlich anerkannt werden können.";
WOMT_aThesenThema[31] = "0";
WOMT_aThesenParteien[31] = new Array();

WOMT_aThesen[32] = new Array();
WOMT_aThesenLinks[32] = new Array();
WOMT_aThesenVotematch[32] = "0";
WOMT_aThesenVotematchId[32] = "0";
WOMT_aThesen[32][0] = new Array();
WOMT_aThesenLinks[32][0] = new Array();
WOMT_aThesenLinks[32][0][0] = new Array();
WOMT_aThesenLinks[32][0][0][0] =
  "Ab 2021: CO2-Preis auf Heiz- und Kraftstoffe (Hintergrund aktuell, bpb.de)";
WOMT_aThesenLinks[32][0][0][1] =
  "https://www.bpb.de/politik/hintergrund-aktuell/324668/co2-preis-auf-heiz-und-kraftstoffe";
WOMT_aThesenLinks[32][0][0][2] = "url";
WOMT_aThesenLinks[32][0][1] = new Array();
WOMT_aThesenLinks[32][0][1][0] =
  "Debatte: Neue Klimaziele in Europa: Auf dem richtigen Weg? (eurotopics.net)";
WOMT_aThesenLinks[32][0][1][1] =
  "https://www.eurotopics.net/de/261187/neue-klimaziele-in-europa-auf-dem-richtigen-weg";
WOMT_aThesenLinks[32][0][1][2] = "url";
WOMT_aThesenLinks[32][0][2] = new Array();
WOMT_aThesenLinks[32][0][2][0] =
  "Pro-Kopf-CO2-Ausstoß, Bevölkerungsentwicklung und Pro-Kopf-Bruttoinlandsprodukt weltweit (bpb.de)";
WOMT_aThesenLinks[32][0][2][1] = "https://www.bpb.de/fsd/karte-co2_2018-04-26/";
WOMT_aThesenLinks[32][0][2][2] = "url";
WOMT_aThesen[32][0][0] = "Anstieg des CO2-Preises";
WOMT_aThesen[32][0][1] =
  "Der staatlich festgelegte Preis für den Ausstoß von CO2 beim Heizen und Autofahren soll stärker steigen als geplant.";
WOMT_aThesenThema[32] = "0";
WOMT_aThesenParteien[32] = new Array();

WOMT_aThesen[33] = new Array();
WOMT_aThesenLinks[33] = new Array();
WOMT_aThesenVotematch[33] = "0";
WOMT_aThesenVotematchId[33] = "0";
WOMT_aThesen[33][0] = new Array();
WOMT_aThesenLinks[33][0] = new Array();
WOMT_aThesenLinks[33][0][0] = new Array();
WOMT_aThesenLinks[33][0][0][0] =
  "Entwicklung der öffentlichen Finanzen (Zahlen und Fakten: Die soziale Situation in Deutschland, bpb.de)";
WOMT_aThesenLinks[33][0][0][1] =
  "https://www.bpb.de/nachschlagen/zahlen-und-fakten/soziale-situation-in-deutschland/61867/oeffentliche-finanzen";
WOMT_aThesenLinks[33][0][0][2] = "url";
WOMT_aThesenLinks[33][0][1] = new Array();
WOMT_aThesenLinks[33][0][1][0] = "Schuldenbremse (Die Netzdebatte, bpb.de)";
WOMT_aThesenLinks[33][0][1][1] =
  "https://www.bpb.de/dialog/netzdebatte/206917/schuldenbremse";
WOMT_aThesenLinks[33][0][1][2] = "url";
WOMT_aThesenLinks[33][0][2] = new Array();
WOMT_aThesenLinks[33][0][2][0] = "ApuZ: Schwarze Null (bpb.de)";
WOMT_aThesenLinks[33][0][2][1] = "https://www.bpb.de/apuz/schwarze-null-2020/";
WOMT_aThesenLinks[33][0][2][2] = "url";
WOMT_aThesen[33][0][0] = "Schuldenbremse";
WOMT_aThesen[33][0][1] =
  "Die Schuldenbremse im Grundgesetz soll beibehalten werden.";
WOMT_aThesenThema[33] = "0";
WOMT_aThesenParteien[33] = new Array();

WOMT_aThesen[34] = new Array();
WOMT_aThesenLinks[34] = new Array();
WOMT_aThesenVotematch[34] = "0";
WOMT_aThesenVotematchId[34] = "0";
WOMT_aThesen[34][0] = new Array();
WOMT_aThesenLinks[34][0] = new Array();
WOMT_aThesenLinks[34][0][0] = new Array();
WOMT_aThesenLinks[34][0][0][0] =
  "Asyl (Glossar Migration – Integration – Flucht & Asyl, bpb.de)";
WOMT_aThesenLinks[34][0][0][1] =
  "https://www.bpb.de/nachschlagen/lexika/270338/asyl";
WOMT_aThesenLinks[34][0][0][2] = "url";
WOMT_aThesenLinks[34][0][1] = new Array();
WOMT_aThesenLinks[34][0][1][0] = "Zahlen zu Asyl in Deutschland (bpb.de)";
WOMT_aThesenLinks[34][0][1][1] =
  "https://www.bpb.de/gesellschaft/migration/flucht/zahlen-zu-asyl/";
WOMT_aThesenLinks[34][0][1][2] = "url";
WOMT_aThesenLinks[34][0][2] = new Array();
WOMT_aThesenLinks[34][0][2][0] =
  "Julia Kraft: Welche verschiedenen Schutzformen können im Asylverfahren erteilt werden? (Kurzdossiers: Zuwanderung, Flucht und Asyl: Aktuelle Themen, bpb.de)";
WOMT_aThesenLinks[34][0][2][1] =
  "https://www.bpb.de/gesellschaft/migration/kurzdossiers/224699/schutzanspruch-im-deutschen-asylverfahren";
WOMT_aThesenLinks[34][0][2][2] = "url";
WOMT_aThesen[34][0][0] = "Asyl nur für politisch Verfolgte";
WOMT_aThesen[34][0][1] =
  "Asyl soll weiterhin nur politisch Verfolgten gewährt werden.";
WOMT_aThesenThema[34] = "0";
WOMT_aThesenParteien[34] = new Array();

WOMT_aThesen[35] = new Array();
WOMT_aThesenLinks[35] = new Array();
WOMT_aThesenVotematch[35] = "0";
WOMT_aThesenVotematchId[35] = "0";
WOMT_aThesen[35][0] = new Array();
WOMT_aThesenLinks[35][0] = new Array();
WOMT_aThesenLinks[35][0][0] = new Array();
WOMT_aThesenLinks[35][0][0][0] =
  "Mindestlohn (Zahlen und Fakten: Die soziale Situation in Deutschland, bpb.de)";
WOMT_aThesenLinks[35][0][0][1] =
  "https://www.bpb.de/nachschlagen/zahlen-und-fakten/soziale-situation-in-deutschland/317062/mindestlohn";
WOMT_aThesenLinks[35][0][0][2] = "url";
WOMT_aThesenLinks[35][0][1] = new Array();
WOMT_aThesenLinks[35][0][1][0] =
  "Mindestlohn (Dossier: Arbeitsmarktpolitik, bpb.de)";
WOMT_aThesenLinks[35][0][1][1] =
  "https://www.bpb.de/politik/innenpolitik/arbeitsmarktpolitik/326357/mindestlohn";
WOMT_aThesenLinks[35][0][1][2] = "url";
WOMT_aThesenLinks[35][0][2] = new Array();
WOMT_aThesenLinks[35][0][2][0] =
  "Hagen Lesch, Christoph Schröder: Zur Höhe des Mindestlohns in Deutschland (APuZ: Mindestlohn, bpb.de)";
WOMT_aThesenLinks[35][0][2][1] =
  "https://www.bpb.de/apuz/315572/zur-hoehe-des-mindestlohns-in-deutschland";
WOMT_aThesenLinks[35][0][2][2] = "url";
WOMT_aThesen[35][0][0] = "Erhöhung des Mindestlohns";
WOMT_aThesen[35][0][1] =
  "Der gesetzliche Mindestlohn soll spätestens im Jahr 2022 auf mindestens 12 Euro erhöht werden.";
WOMT_aThesenThema[35] = "0";
WOMT_aThesenParteien[35] = new Array();

WOMT_aThesen[36] = new Array();
WOMT_aThesenLinks[36] = new Array();
WOMT_aThesenVotematch[36] = "0";
WOMT_aThesenVotematchId[36] = "0";
WOMT_aThesen[36][0] = new Array();
WOMT_aThesenLinks[36][0] = new Array();
WOMT_aThesenLinks[36][0][0] = new Array();
WOMT_aThesenLinks[36][0][0][0] =
  "Debatte: Hat das Fliegen noch Zukunft? (eurotopics.net)";
WOMT_aThesenLinks[36][0][0][1] =
  "https://www.eurotopics.net/de/239689/hat-das-fliegen-noch-zukunft";
WOMT_aThesenLinks[36][0][0][2] = "url";
WOMT_aThesenLinks[36][0][1] = new Array();
WOMT_aThesenLinks[36][0][1][0] =
  "Oliver Lah: Weit gereist. Die Bedeutung des internationalen See- und Luftverkehrs für den Klimaschutz (Dossier: Klimawandel, bpb.de)";
WOMT_aThesenLinks[36][0][1][1] =
  "https://www.bpb.de/gesellschaft/umwelt/klimawandel/198754/see-und-luftverkehr";
WOMT_aThesenLinks[36][0][1][2] = "url";
WOMT_aThesenLinks[36][0][2] = new Array();
WOMT_aThesenLinks[36][0][2][0] =
  "Peter Weissenburger: Der Traum vom ökologischen Fliegen (fluter.de)";
WOMT_aThesenLinks[36][0][2][1] =
  "https://www.fluter.de/der-traum-vom-oekologischen-fliegen";
WOMT_aThesenLinks[36][0][2][2] = "url";
WOMT_aThesen[36][0][0] = "Besteuerung des Flugverkehrs";
WOMT_aThesen[36][0][1] = "Der Flugverkehr soll höher besteuert werden.";
WOMT_aThesenThema[36] = "0";
WOMT_aThesenParteien[36] = new Array();

WOMT_aThesen[37] = new Array();
WOMT_aThesenLinks[37] = new Array();
WOMT_aThesenVotematch[37] = "0";
WOMT_aThesenVotematchId[37] = "0";
WOMT_aThesen[37][0] = new Array();
WOMT_aThesenLinks[37][0] = new Array();
WOMT_aThesenLinks[37][0][0] = new Array();
WOMT_aThesenLinks[37][0][0][0] =
  "Christian Wingerter: Homeoffice (Datenreport 2021, bpb.de)";
WOMT_aThesenLinks[37][0][0][1] =
  "https://www.bpb.de/nachschlagen/datenreport-2021/arbeitsmarkt-und-verdienste/329794/homeoffice";
WOMT_aThesenLinks[37][0][0][2] = "url";
WOMT_aThesenLinks[37][0][1] = new Array();
WOMT_aThesenLinks[37][0][1][0] =
  "Arbeiten von zu Hause: Häufiger ohne Vereinbarung (Datenreport 2021, bpb.de)";
WOMT_aThesenLinks[37][0][1][1] =
  "https://www.bpb.de/nachschlagen/datenreport-2021/arbeitsmarkt-und-verdienste/329848/arbeiten-von-zu-hause-haeufiger-ohne-vereinbarung";
WOMT_aThesenLinks[37][0][1][2] = "url";
WOMT_aThesenLinks[37][0][2] = new Array();
WOMT_aThesenLinks[37][0][2][0] =
  "Debatte: Wird das Home Office die neue Norm? (eurotopics.net)";
WOMT_aThesenLinks[37][0][2][1] =
  "https://www.eurotopics.net/de/265151/wird-das-home-office-die-neue-norm";
WOMT_aThesenLinks[37][0][2][2] = "url";
WOMT_aThesen[37][0][0] = "Homeoffice";
WOMT_aThesen[37][0][1] =
  "Unternehmen sollen selbst entscheiden, ob sie ihren Beschäftigten das Arbeiten im Homeoffice erlauben.";
WOMT_aThesenThema[37] = "0";
WOMT_aThesenParteien[37] = new Array();

WOMT_aThesenParteien[0][0] = "-1";
WOMT_aThesenParteien[0][1] = "1";
WOMT_aThesenParteien[0][2] = "-1";
WOMT_aThesenParteien[0][3] = "-1";
WOMT_aThesenParteien[0][4] = "1";
WOMT_aThesenParteien[0][5] = "1";
WOMT_aThesenParteien[0][6] = "-1";
WOMT_aThesenParteien[0][7] = "1";
WOMT_aThesenParteien[0][8] = "1";
WOMT_aThesenParteien[0][9] = "-1";
WOMT_aThesenParteien[0][10] = "-1";
WOMT_aThesenParteien[0][11] = "1";
WOMT_aThesenParteien[0][12] = "1";
WOMT_aThesenParteien[0][13] = "1";
WOMT_aThesenParteien[0][14] = "-1";
WOMT_aThesenParteien[0][15] = "0";
WOMT_aThesenParteien[0][16] = "1";
WOMT_aThesenParteien[0][17] = "0";
WOMT_aThesenParteien[0][18] = "1";
WOMT_aThesenParteien[0][19] = "1";
WOMT_aThesenParteien[0][20] = "-1";
WOMT_aThesenParteien[0][21] = "-1";
WOMT_aThesenParteien[0][22] = "0";
WOMT_aThesenParteien[0][23] = "1";
WOMT_aThesenParteien[0][24] = "1";
WOMT_aThesenParteien[0][25] = "0";
WOMT_aThesenParteien[0][26] = "1";
WOMT_aThesenParteien[0][27] = "0";
WOMT_aThesenParteien[0][28] = "0";
WOMT_aThesenParteien[0][29] = "-1";
WOMT_aThesenParteien[0][30] = "1";
WOMT_aThesenParteien[0][31] = "-1";
WOMT_aThesenParteien[0][32] = "-1";
WOMT_aThesenParteien[0][33] = "1";
WOMT_aThesenParteien[0][34] = "1";
WOMT_aThesenParteien[0][35] = "-1";
WOMT_aThesenParteien[0][36] = "-1";
WOMT_aThesenParteien[0][37] = "1";
WOMT_aThesenParteien[1][0] = "1";
WOMT_aThesenParteien[1][1] = "1";
WOMT_aThesenParteien[1][2] = "1";
WOMT_aThesenParteien[1][3] = "1";
WOMT_aThesenParteien[1][4] = "-1";
WOMT_aThesenParteien[1][5] = "-1";
WOMT_aThesenParteien[1][6] = "1";
WOMT_aThesenParteien[1][7] = "-1";
WOMT_aThesenParteien[1][8] = "-1";
WOMT_aThesenParteien[1][9] = "1";
WOMT_aThesenParteien[1][10] = "-1";
WOMT_aThesenParteien[1][11] = "-1";
WOMT_aThesenParteien[1][12] = "-1";
WOMT_aThesenParteien[1][13] = "-1";
WOMT_aThesenParteien[1][14] = "1";
WOMT_aThesenParteien[1][15] = "-1";
WOMT_aThesenParteien[1][16] = "-1";
WOMT_aThesenParteien[1][17] = "0";
WOMT_aThesenParteien[1][18] = "-1";
WOMT_aThesenParteien[1][19] = "-1";
WOMT_aThesenParteien[1][20] = "0";
WOMT_aThesenParteien[1][21] = "-1";
WOMT_aThesenParteien[1][22] = "-1";
WOMT_aThesenParteien[1][23] = "-1";
WOMT_aThesenParteien[1][24] = "-1";
WOMT_aThesenParteien[1][25] = "-1";
WOMT_aThesenParteien[1][26] = "1";
WOMT_aThesenParteien[1][27] = "0";
WOMT_aThesenParteien[1][28] = "1";
WOMT_aThesenParteien[1][29] = "-1";
WOMT_aThesenParteien[1][30] = "1";
WOMT_aThesenParteien[1][31] = "1";
WOMT_aThesenParteien[1][32] = "1";
WOMT_aThesenParteien[1][33] = "-1";
WOMT_aThesenParteien[1][34] = "0";
WOMT_aThesenParteien[1][35] = "-1";
WOMT_aThesenParteien[1][36] = "0";
WOMT_aThesenParteien[1][37] = "-1";
WOMT_aThesenParteien[2][0] = "-1";
WOMT_aThesenParteien[2][1] = "1";
WOMT_aThesenParteien[2][2] = "-1";
WOMT_aThesenParteien[2][3] = "1";
WOMT_aThesenParteien[2][4] = "1";
WOMT_aThesenParteien[2][5] = "1";
WOMT_aThesenParteien[2][6] = "-1";
WOMT_aThesenParteien[2][7] = "1";
WOMT_aThesenParteien[2][8] = "1";
WOMT_aThesenParteien[2][9] = "-1";
WOMT_aThesenParteien[2][10] = "1";
WOMT_aThesenParteien[2][11] = "1";
WOMT_aThesenParteien[2][12] = "1";
WOMT_aThesenParteien[2][13] = "1";
WOMT_aThesenParteien[2][14] = "-1";
WOMT_aThesenParteien[2][15] = "1";
WOMT_aThesenParteien[2][16] = "1";
WOMT_aThesenParteien[2][17] = "0";
WOMT_aThesenParteien[2][18] = "0";
WOMT_aThesenParteien[2][19] = "1";
WOMT_aThesenParteien[2][20] = "-1";
WOMT_aThesenParteien[2][21] = "-1";
WOMT_aThesenParteien[2][22] = "1";
WOMT_aThesenParteien[2][23] = "1";
WOMT_aThesenParteien[2][24] = "1";
WOMT_aThesenParteien[2][25] = "-1";
WOMT_aThesenParteien[2][26] = "-1";
WOMT_aThesenParteien[2][27] = "-1";
WOMT_aThesenParteien[2][28] = "-1";
WOMT_aThesenParteien[2][29] = "-1";
WOMT_aThesenParteien[2][30] = "1";
WOMT_aThesenParteien[2][31] = "-1";
WOMT_aThesenParteien[2][32] = "0";
WOMT_aThesenParteien[2][33] = "1";
WOMT_aThesenParteien[2][34] = "1";
WOMT_aThesenParteien[2][35] = "0";
WOMT_aThesenParteien[2][36] = "0";
WOMT_aThesenParteien[2][37] = "1";
WOMT_aThesenParteien[3][0] = "-1";
WOMT_aThesenParteien[3][1] = "-1";
WOMT_aThesenParteien[3][2] = "1";
WOMT_aThesenParteien[3][3] = "0";
WOMT_aThesenParteien[3][4] = "-1";
WOMT_aThesenParteien[3][5] = "-1";
WOMT_aThesenParteien[3][6] = "-1";
WOMT_aThesenParteien[3][7] = "-1";
WOMT_aThesenParteien[3][8] = "-1";
WOMT_aThesenParteien[3][9] = "1";
WOMT_aThesenParteien[3][10] = "-1";
WOMT_aThesenParteien[3][11] = "-1";
WOMT_aThesenParteien[3][12] = "-1";
WOMT_aThesenParteien[3][13] = "-1";
WOMT_aThesenParteien[3][14] = "0";
WOMT_aThesenParteien[3][15] = "-1";
WOMT_aThesenParteien[3][16] = "-1";
WOMT_aThesenParteien[3][17] = "0";
WOMT_aThesenParteien[3][18] = "1";
WOMT_aThesenParteien[3][19] = "-1";
WOMT_aThesenParteien[3][20] = "0";
WOMT_aThesenParteien[3][21] = "1";
WOMT_aThesenParteien[3][22] = "-1";
WOMT_aThesenParteien[3][23] = "-1";
WOMT_aThesenParteien[3][24] = "-1";
WOMT_aThesenParteien[3][25] = "0";
WOMT_aThesenParteien[3][26] = "1";
WOMT_aThesenParteien[3][27] = "-1";
WOMT_aThesenParteien[3][28] = "1";
WOMT_aThesenParteien[3][29] = "1";
WOMT_aThesenParteien[3][30] = "1";
WOMT_aThesenParteien[3][31] = "1";
WOMT_aThesenParteien[3][32] = "-1";
WOMT_aThesenParteien[3][33] = "0";
WOMT_aThesenParteien[3][34] = "-1";
WOMT_aThesenParteien[3][35] = "-1";
WOMT_aThesenParteien[3][36] = "1";
WOMT_aThesenParteien[3][37] = "-1";
WOMT_aThesenParteien[4][0] = "0";
WOMT_aThesenParteien[4][1] = "1";
WOMT_aThesenParteien[4][2] = "-1";
WOMT_aThesenParteien[4][3] = "-1";
WOMT_aThesenParteien[4][4] = "1";
WOMT_aThesenParteien[4][5] = "1";
WOMT_aThesenParteien[4][6] = "-1";
WOMT_aThesenParteien[4][7] = "1";
WOMT_aThesenParteien[4][8] = "1";
WOMT_aThesenParteien[4][9] = "0";
WOMT_aThesenParteien[4][10] = "1";
WOMT_aThesenParteien[4][11] = "1";
WOMT_aThesenParteien[4][12] = "1";
WOMT_aThesenParteien[4][13] = "1";
WOMT_aThesenParteien[4][14] = "-1";
WOMT_aThesenParteien[4][15] = "1";
WOMT_aThesenParteien[4][16] = "1";
WOMT_aThesenParteien[4][17] = "0";
WOMT_aThesenParteien[4][18] = "1";
WOMT_aThesenParteien[4][19] = "1";
WOMT_aThesenParteien[4][20] = "1";
WOMT_aThesenParteien[4][21] = "1";
WOMT_aThesenParteien[4][22] = "0";
WOMT_aThesenParteien[4][23] = "1";
WOMT_aThesenParteien[4][24] = "1";
WOMT_aThesenParteien[4][25] = "1";
WOMT_aThesenParteien[4][26] = "-1";
WOMT_aThesenParteien[4][27] = "-1";
WOMT_aThesenParteien[4][28] = "1";
WOMT_aThesenParteien[4][29] = "-1";
WOMT_aThesenParteien[4][30] = "1";
WOMT_aThesenParteien[4][31] = "-1";
WOMT_aThesenParteien[4][32] = "0";
WOMT_aThesenParteien[4][33] = "0";
WOMT_aThesenParteien[4][34] = "1";
WOMT_aThesenParteien[4][35] = "-1";
WOMT_aThesenParteien[4][36] = "1";
WOMT_aThesenParteien[4][37] = "1";
WOMT_aThesenParteien[5][0] = "1";
WOMT_aThesenParteien[5][1] = "1";
WOMT_aThesenParteien[5][2] = "1";
WOMT_aThesenParteien[5][3] = "1";
WOMT_aThesenParteien[5][4] = "-1";
WOMT_aThesenParteien[5][5] = "-1";
WOMT_aThesenParteien[5][6] = "1";
WOMT_aThesenParteien[5][7] = "-1";
WOMT_aThesenParteien[5][8] = "-1";
WOMT_aThesenParteien[5][9] = "-1";
WOMT_aThesenParteien[5][10] = "-1";
WOMT_aThesenParteien[5][11] = "-1";
WOMT_aThesenParteien[5][12] = "-1";
WOMT_aThesenParteien[5][13] = "-1";
WOMT_aThesenParteien[5][14] = "1";
WOMT_aThesenParteien[5][15] = "0";
WOMT_aThesenParteien[5][16] = "-1";
WOMT_aThesenParteien[5][17] = "0";
WOMT_aThesenParteien[5][18] = "-1";
WOMT_aThesenParteien[5][19] = "-1";
WOMT_aThesenParteien[5][20] = "0";
WOMT_aThesenParteien[5][21] = "-1";
WOMT_aThesenParteien[5][22] = "1";
WOMT_aThesenParteien[5][23] = "-1";
WOMT_aThesenParteien[5][24] = "-1";
WOMT_aThesenParteien[5][25] = "-1";
WOMT_aThesenParteien[5][26] = "1";
WOMT_aThesenParteien[5][27] = "1";
WOMT_aThesenParteien[5][28] = "-1";
WOMT_aThesenParteien[5][29] = "-1";
WOMT_aThesenParteien[5][30] = "1";
WOMT_aThesenParteien[5][31] = "1";
WOMT_aThesenParteien[5][32] = "-1";
WOMT_aThesenParteien[5][33] = "-1";
WOMT_aThesenParteien[5][34] = "0";
WOMT_aThesenParteien[5][35] = "-1";
WOMT_aThesenParteien[5][36] = "0";
WOMT_aThesenParteien[5][37] = "-1";
WOMT_aThesenParteien[6][0] = "-1";
WOMT_aThesenParteien[6][1] = "1";
WOMT_aThesenParteien[6][2] = "-1";
WOMT_aThesenParteien[6][3] = "0";
WOMT_aThesenParteien[6][4] = "1";
WOMT_aThesenParteien[6][5] = "1";
WOMT_aThesenParteien[6][6] = "-1";
WOMT_aThesenParteien[6][7] = "1";
WOMT_aThesenParteien[6][8] = "1";
WOMT_aThesenParteien[6][9] = "-1";
WOMT_aThesenParteien[6][10] = "1";
WOMT_aThesenParteien[6][11] = "1";
WOMT_aThesenParteien[6][12] = "1";
WOMT_aThesenParteien[6][13] = "1";
WOMT_aThesenParteien[6][14] = "1";
WOMT_aThesenParteien[6][15] = "1";
WOMT_aThesenParteien[6][16] = "1";
WOMT_aThesenParteien[6][17] = "0";
WOMT_aThesenParteien[6][18] = "0";
WOMT_aThesenParteien[6][19] = "1";
WOMT_aThesenParteien[6][20] = "0";
WOMT_aThesenParteien[6][21] = "-1";
WOMT_aThesenParteien[6][22] = "1";
WOMT_aThesenParteien[6][23] = "1";
WOMT_aThesenParteien[6][24] = "1";
WOMT_aThesenParteien[6][25] = "0";
WOMT_aThesenParteien[6][26] = "-1";
WOMT_aThesenParteien[6][27] = "1";
WOMT_aThesenParteien[6][28] = "-1";
WOMT_aThesenParteien[6][29] = "-1";
WOMT_aThesenParteien[6][30] = "-1";
WOMT_aThesenParteien[6][31] = "-1";
WOMT_aThesenParteien[6][32] = "0";
WOMT_aThesenParteien[6][33] = "1";
WOMT_aThesenParteien[6][34] = "1";
WOMT_aThesenParteien[6][35] = "-1";
WOMT_aThesenParteien[6][36] = "0";
WOMT_aThesenParteien[6][37] = "1";
WOMT_aThesenParteien[7][0] = "-1";
WOMT_aThesenParteien[7][1] = "1";
WOMT_aThesenParteien[7][2] = "1";
WOMT_aThesenParteien[7][3] = "-1";
WOMT_aThesenParteien[7][4] = "1";
WOMT_aThesenParteien[7][5] = "1";
WOMT_aThesenParteien[7][6] = "-1";
WOMT_aThesenParteien[7][7] = "1";
WOMT_aThesenParteien[7][8] = "1";
WOMT_aThesenParteien[7][9] = "1";
WOMT_aThesenParteien[7][10] = "1";
WOMT_aThesenParteien[7][11] = "1";
WOMT_aThesenParteien[7][12] = "1";
WOMT_aThesenParteien[7][13] = "1";
WOMT_aThesenParteien[7][14] = "0";
WOMT_aThesenParteien[7][15] = "1";
WOMT_aThesenParteien[7][16] = "1";
WOMT_aThesenParteien[7][17] = "0";
WOMT_aThesenParteien[7][18] = "1";
WOMT_aThesenParteien[7][19] = "1";
WOMT_aThesenParteien[7][20] = "1";
WOMT_aThesenParteien[7][21] = "0";
WOMT_aThesenParteien[7][22] = "0";
WOMT_aThesenParteien[7][23] = "1";
WOMT_aThesenParteien[7][24] = "1";
WOMT_aThesenParteien[7][25] = "1";
WOMT_aThesenParteien[7][26] = "-1";
WOMT_aThesenParteien[7][27] = "1";
WOMT_aThesenParteien[7][28] = "1";
WOMT_aThesenParteien[7][29] = "1";
WOMT_aThesenParteien[7][30] = "1";
WOMT_aThesenParteien[7][31] = "-1";
WOMT_aThesenParteien[7][32] = "1";
WOMT_aThesenParteien[7][33] = "1";
WOMT_aThesenParteien[7][34] = "1";
WOMT_aThesenParteien[7][35] = "1";
WOMT_aThesenParteien[7][36] = "1";
WOMT_aThesenParteien[7][37] = "1";
WOMT_aThesenParteien[8][0] = "-1";
WOMT_aThesenParteien[8][1] = "-1";
WOMT_aThesenParteien[8][2] = "1";
WOMT_aThesenParteien[8][3] = "0";
WOMT_aThesenParteien[8][4] = "-1";
WOMT_aThesenParteien[8][5] = "-1";
WOMT_aThesenParteien[8][6] = "-1";
WOMT_aThesenParteien[8][7] = "-1";
WOMT_aThesenParteien[8][8] = "-1";
WOMT_aThesenParteien[8][9] = "1";
WOMT_aThesenParteien[8][10] = "-1";
WOMT_aThesenParteien[8][11] = "-1";
WOMT_aThesenParteien[8][12] = "-1";
WOMT_aThesenParteien[8][13] = "-1";
WOMT_aThesenParteien[8][14] = "1";
WOMT_aThesenParteien[8][15] = "-1";
WOMT_aThesenParteien[8][16] = "-1";
WOMT_aThesenParteien[8][17] = "0";
WOMT_aThesenParteien[8][18] = "-1";
WOMT_aThesenParteien[8][19] = "-1";
WOMT_aThesenParteien[8][20] = "-1";
WOMT_aThesenParteien[8][21] = "-1";
WOMT_aThesenParteien[8][22] = "-1";
WOMT_aThesenParteien[8][23] = "-1";
WOMT_aThesenParteien[8][24] = "-1";
WOMT_aThesenParteien[8][25] = "0";
WOMT_aThesenParteien[8][26] = "-1";
WOMT_aThesenParteien[8][27] = "-1";
WOMT_aThesenParteien[8][28] = "1";
WOMT_aThesenParteien[8][29] = "-1";
WOMT_aThesenParteien[8][30] = "-1";
WOMT_aThesenParteien[8][31] = "-1";
WOMT_aThesenParteien[8][32] = "-1";
WOMT_aThesenParteien[8][33] = "-1";
WOMT_aThesenParteien[8][34] = "-1";
WOMT_aThesenParteien[8][35] = "-1";
WOMT_aThesenParteien[8][36] = "0";
WOMT_aThesenParteien[8][37] = "-1";
WOMT_aThesenParteien[9][0] = "0";
WOMT_aThesenParteien[9][1] = "1";
WOMT_aThesenParteien[9][2] = "1";
WOMT_aThesenParteien[9][3] = "-1";
WOMT_aThesenParteien[9][4] = "1";
WOMT_aThesenParteien[9][5] = "1";
WOMT_aThesenParteien[9][6] = "1";
WOMT_aThesenParteien[9][7] = "1";
WOMT_aThesenParteien[9][8] = "0";
WOMT_aThesenParteien[9][9] = "1";
WOMT_aThesenParteien[9][10] = "1";
WOMT_aThesenParteien[9][11] = "1";
WOMT_aThesenParteien[9][12] = "1";
WOMT_aThesenParteien[9][13] = "1";
WOMT_aThesenParteien[9][14] = "1";
WOMT_aThesenParteien[9][15] = "0";
WOMT_aThesenParteien[9][16] = "1";
WOMT_aThesenParteien[9][17] = "0";
WOMT_aThesenParteien[9][18] = "1";
WOMT_aThesenParteien[9][19] = "1";
WOMT_aThesenParteien[9][20] = "0";
WOMT_aThesenParteien[9][21] = "1";
WOMT_aThesenParteien[9][22] = "0";
WOMT_aThesenParteien[9][23] = "1";
WOMT_aThesenParteien[9][24] = "1";
WOMT_aThesenParteien[9][25] = "1";
WOMT_aThesenParteien[9][26] = "1";
WOMT_aThesenParteien[9][27] = "1";
WOMT_aThesenParteien[9][28] = "1";
WOMT_aThesenParteien[9][29] = "1";
WOMT_aThesenParteien[9][30] = "1";
WOMT_aThesenParteien[9][31] = "-1";
WOMT_aThesenParteien[9][32] = "0";
WOMT_aThesenParteien[9][33] = "0";
WOMT_aThesenParteien[9][34] = "1";
WOMT_aThesenParteien[9][35] = "1";
WOMT_aThesenParteien[9][36] = "1";
WOMT_aThesenParteien[9][37] = "1";
WOMT_aThesenParteien[10][0] = "-1";
WOMT_aThesenParteien[10][1] = "-1";
WOMT_aThesenParteien[10][2] = "1";
WOMT_aThesenParteien[10][3] = "-1";
WOMT_aThesenParteien[10][4] = "-1";
WOMT_aThesenParteien[10][5] = "-1";
WOMT_aThesenParteien[10][6] = "-1";
WOMT_aThesenParteien[10][7] = "-1";
WOMT_aThesenParteien[10][8] = "-1";
WOMT_aThesenParteien[10][9] = "1";
WOMT_aThesenParteien[10][10] = "-1";
WOMT_aThesenParteien[10][11] = "-1";
WOMT_aThesenParteien[10][12] = "-1";
WOMT_aThesenParteien[10][13] = "-1";
WOMT_aThesenParteien[10][14] = "1";
WOMT_aThesenParteien[10][15] = "0";
WOMT_aThesenParteien[10][16] = "-1";
WOMT_aThesenParteien[10][17] = "0";
WOMT_aThesenParteien[10][18] = "1";
WOMT_aThesenParteien[10][19] = "-1";
WOMT_aThesenParteien[10][20] = "-1";
WOMT_aThesenParteien[10][21] = "1";
WOMT_aThesenParteien[10][22] = "-1";
WOMT_aThesenParteien[10][23] = "-1";
WOMT_aThesenParteien[10][24] = "-1";
WOMT_aThesenParteien[10][25] = "1";
WOMT_aThesenParteien[10][26] = "1";
WOMT_aThesenParteien[10][27] = "0";
WOMT_aThesenParteien[10][28] = "1";
WOMT_aThesenParteien[10][29] = "-1";
WOMT_aThesenParteien[10][30] = "1";
WOMT_aThesenParteien[10][31] = "-1";
WOMT_aThesenParteien[10][32] = "-1";
WOMT_aThesenParteien[10][33] = "-1";
WOMT_aThesenParteien[10][34] = "-1";
WOMT_aThesenParteien[10][35] = "-1";
WOMT_aThesenParteien[10][36] = "1";
WOMT_aThesenParteien[10][37] = "-1";
WOMT_aThesenParteien[11][0] = "1";
WOMT_aThesenParteien[11][1] = "1";
WOMT_aThesenParteien[11][2] = "1";
WOMT_aThesenParteien[11][3] = "1";
WOMT_aThesenParteien[11][4] = "-1";
WOMT_aThesenParteien[11][5] = "-1";
WOMT_aThesenParteien[11][6] = "0";
WOMT_aThesenParteien[11][7] = "-1";
WOMT_aThesenParteien[11][8] = "0";
WOMT_aThesenParteien[11][9] = "-1";
WOMT_aThesenParteien[11][10] = "1";
WOMT_aThesenParteien[11][11] = "-1";
WOMT_aThesenParteien[11][12] = "-1";
WOMT_aThesenParteien[11][13] = "-1";
WOMT_aThesenParteien[11][14] = "-1";
WOMT_aThesenParteien[11][15] = "-1";
WOMT_aThesenParteien[11][16] = "-1";
WOMT_aThesenParteien[11][17] = "0";
WOMT_aThesenParteien[11][18] = "-1";
WOMT_aThesenParteien[11][19] = "-1";
WOMT_aThesenParteien[11][20] = "-1";
WOMT_aThesenParteien[11][21] = "1";
WOMT_aThesenParteien[11][22] = "1";
WOMT_aThesenParteien[11][23] = "-1";
WOMT_aThesenParteien[11][24] = "-1";
WOMT_aThesenParteien[11][25] = "-1";
WOMT_aThesenParteien[11][26] = "1";
WOMT_aThesenParteien[11][27] = "1";
WOMT_aThesenParteien[11][28] = "0";
WOMT_aThesenParteien[11][29] = "1";
WOMT_aThesenParteien[11][30] = "1";
WOMT_aThesenParteien[11][31] = "-1";
WOMT_aThesenParteien[11][32] = "1";
WOMT_aThesenParteien[11][33] = "-1";
WOMT_aThesenParteien[11][34] = "1";
WOMT_aThesenParteien[11][35] = "1";
WOMT_aThesenParteien[11][36] = "0";
WOMT_aThesenParteien[11][37] = "1";
WOMT_aThesenParteien[12][0] = "-1";
WOMT_aThesenParteien[12][1] = "-1";
WOMT_aThesenParteien[12][2] = "-1";
WOMT_aThesenParteien[12][3] = "1";
WOMT_aThesenParteien[12][4] = "1";
WOMT_aThesenParteien[12][5] = "1";
WOMT_aThesenParteien[12][6] = "1";
WOMT_aThesenParteien[12][7] = "1";
WOMT_aThesenParteien[12][8] = "0";
WOMT_aThesenParteien[12][9] = "1";
WOMT_aThesenParteien[12][10] = "1";
WOMT_aThesenParteien[12][11] = "1";
WOMT_aThesenParteien[12][12] = "1";
WOMT_aThesenParteien[12][13] = "1";
WOMT_aThesenParteien[12][14] = "-1";
WOMT_aThesenParteien[12][15] = "1";
WOMT_aThesenParteien[12][16] = "-1";
WOMT_aThesenParteien[12][17] = "0";
WOMT_aThesenParteien[12][18] = "-1";
WOMT_aThesenParteien[12][19] = "1";
WOMT_aThesenParteien[12][20] = "1";
WOMT_aThesenParteien[12][21] = "-1";
WOMT_aThesenParteien[12][22] = "1";
WOMT_aThesenParteien[12][23] = "1";
WOMT_aThesenParteien[12][24] = "1";
WOMT_aThesenParteien[12][25] = "0";
WOMT_aThesenParteien[12][26] = "-1";
WOMT_aThesenParteien[12][27] = "-1";
WOMT_aThesenParteien[12][28] = "1";
WOMT_aThesenParteien[12][29] = "-1";
WOMT_aThesenParteien[12][30] = "1";
WOMT_aThesenParteien[12][31] = "1";
WOMT_aThesenParteien[12][32] = "-1";
WOMT_aThesenParteien[12][33] = "1";
WOMT_aThesenParteien[12][34] = "1";
WOMT_aThesenParteien[12][35] = "1";
WOMT_aThesenParteien[12][36] = "0";
WOMT_aThesenParteien[12][37] = "1";
WOMT_aThesenParteien[13][0] = "-1";
WOMT_aThesenParteien[13][1] = "1";
WOMT_aThesenParteien[13][2] = "-1";
WOMT_aThesenParteien[13][3] = "0";
WOMT_aThesenParteien[13][4] = "1";
WOMT_aThesenParteien[13][5] = "1";
WOMT_aThesenParteien[13][6] = "1";
WOMT_aThesenParteien[13][7] = "1";
WOMT_aThesenParteien[13][8] = "1";
WOMT_aThesenParteien[13][9] = "-1";
WOMT_aThesenParteien[13][10] = "1";
WOMT_aThesenParteien[13][11] = "1";
WOMT_aThesenParteien[13][12] = "1";
WOMT_aThesenParteien[13][13] = "1";
WOMT_aThesenParteien[13][14] = "-1";
WOMT_aThesenParteien[13][15] = "1";
WOMT_aThesenParteien[13][16] = "1";
WOMT_aThesenParteien[13][17] = "0";
WOMT_aThesenParteien[13][18] = "-1";
WOMT_aThesenParteien[13][19] = "1";
WOMT_aThesenParteien[13][20] = "-1";
WOMT_aThesenParteien[13][21] = "-1";
WOMT_aThesenParteien[13][22] = "1";
WOMT_aThesenParteien[13][23] = "1";
WOMT_aThesenParteien[13][24] = "1";
WOMT_aThesenParteien[13][25] = "0";
WOMT_aThesenParteien[13][26] = "1";
WOMT_aThesenParteien[13][27] = "-1";
WOMT_aThesenParteien[13][28] = "-1";
WOMT_aThesenParteien[13][29] = "-1";
WOMT_aThesenParteien[13][30] = "-1";
WOMT_aThesenParteien[13][31] = "-1";
WOMT_aThesenParteien[13][32] = "1";
WOMT_aThesenParteien[13][33] = "0";
WOMT_aThesenParteien[13][34] = "1";
WOMT_aThesenParteien[13][35] = "1";
WOMT_aThesenParteien[13][36] = "-1";
WOMT_aThesenParteien[13][37] = "1";
WOMT_aThesenParteien[14][0] = "0";
WOMT_aThesenParteien[14][1] = "1";
WOMT_aThesenParteien[14][2] = "-1";
WOMT_aThesenParteien[14][3] = "0";
WOMT_aThesenParteien[14][4] = "1";
WOMT_aThesenParteien[14][5] = "1";
WOMT_aThesenParteien[14][6] = "0";
WOMT_aThesenParteien[14][7] = "1";
WOMT_aThesenParteien[14][8] = "1";
WOMT_aThesenParteien[14][9] = "-1";
WOMT_aThesenParteien[14][10] = "0";
WOMT_aThesenParteien[14][11] = "-1";
WOMT_aThesenParteien[14][12] = "1";
WOMT_aThesenParteien[14][13] = "1";
WOMT_aThesenParteien[14][14] = "-1";
WOMT_aThesenParteien[14][15] = "0";
WOMT_aThesenParteien[14][16] = "1";
WOMT_aThesenParteien[14][17] = "0";
WOMT_aThesenParteien[14][18] = "1";
WOMT_aThesenParteien[14][19] = "1";
WOMT_aThesenParteien[14][20] = "-1";
WOMT_aThesenParteien[14][21] = "-1";
WOMT_aThesenParteien[14][22] = "0";
WOMT_aThesenParteien[14][23] = "1";
WOMT_aThesenParteien[14][24] = "0";
WOMT_aThesenParteien[14][25] = "-1";
WOMT_aThesenParteien[14][26] = "-1";
WOMT_aThesenParteien[14][27] = "-1";
WOMT_aThesenParteien[14][28] = "-1";
WOMT_aThesenParteien[14][29] = "-1";
WOMT_aThesenParteien[14][30] = "1";
WOMT_aThesenParteien[14][31] = "-1";
WOMT_aThesenParteien[14][32] = "1";
WOMT_aThesenParteien[14][33] = "1";
WOMT_aThesenParteien[14][34] = "0";
WOMT_aThesenParteien[14][35] = "-1";
WOMT_aThesenParteien[14][36] = "-1";
WOMT_aThesenParteien[14][37] = "1";
WOMT_aThesenParteien[15][0] = "1";
WOMT_aThesenParteien[15][1] = "1";
WOMT_aThesenParteien[15][2] = "1";
WOMT_aThesenParteien[15][3] = "0";
WOMT_aThesenParteien[15][4] = "0";
WOMT_aThesenParteien[15][5] = "-1";
WOMT_aThesenParteien[15][6] = "1";
WOMT_aThesenParteien[15][7] = "-1";
WOMT_aThesenParteien[15][8] = "-1";
WOMT_aThesenParteien[15][9] = "1";
WOMT_aThesenParteien[15][10] = "-1";
WOMT_aThesenParteien[15][11] = "-1";
WOMT_aThesenParteien[15][12] = "-1";
WOMT_aThesenParteien[15][13] = "0";
WOMT_aThesenParteien[15][14] = "0";
WOMT_aThesenParteien[15][15] = "0";
WOMT_aThesenParteien[15][16] = "0";
WOMT_aThesenParteien[15][17] = "0";
WOMT_aThesenParteien[15][18] = "1";
WOMT_aThesenParteien[15][19] = "1";
WOMT_aThesenParteien[15][20] = "0";
WOMT_aThesenParteien[15][21] = "1";
WOMT_aThesenParteien[15][22] = "0";
WOMT_aThesenParteien[15][23] = "-1";
WOMT_aThesenParteien[15][24] = "1";
WOMT_aThesenParteien[15][25] = "1";
WOMT_aThesenParteien[15][26] = "1";
WOMT_aThesenParteien[15][27] = "1";
WOMT_aThesenParteien[15][28] = "1";
WOMT_aThesenParteien[15][29] = "-1";
WOMT_aThesenParteien[15][30] = "1";
WOMT_aThesenParteien[15][31] = "1";
WOMT_aThesenParteien[15][32] = "1";
WOMT_aThesenParteien[15][33] = "0";
WOMT_aThesenParteien[15][34] = "-1";
WOMT_aThesenParteien[15][35] = "1";
WOMT_aThesenParteien[15][36] = "1";
WOMT_aThesenParteien[15][37] = "-1";
WOMT_aThesenParteien[16][0] = "1";
WOMT_aThesenParteien[16][1] = "-1";
WOMT_aThesenParteien[16][2] = "1";
WOMT_aThesenParteien[16][3] = "1";
WOMT_aThesenParteien[16][4] = "-1";
WOMT_aThesenParteien[16][5] = "-1";
WOMT_aThesenParteien[16][6] = "1";
WOMT_aThesenParteien[16][7] = "1";
WOMT_aThesenParteien[16][8] = "0";
WOMT_aThesenParteien[16][9] = "-1";
WOMT_aThesenParteien[16][10] = "1";
WOMT_aThesenParteien[16][11] = "-1";
WOMT_aThesenParteien[16][12] = "1";
WOMT_aThesenParteien[16][13] = "1";
WOMT_aThesenParteien[16][14] = "1";
WOMT_aThesenParteien[16][15] = "1";
WOMT_aThesenParteien[16][16] = "-1";
WOMT_aThesenParteien[16][17] = "0";
WOMT_aThesenParteien[16][18] = "0";
WOMT_aThesenParteien[16][19] = "1";
WOMT_aThesenParteien[16][20] = "1";
WOMT_aThesenParteien[16][21] = "1";
WOMT_aThesenParteien[16][22] = "1";
WOMT_aThesenParteien[16][23] = "-1";
WOMT_aThesenParteien[16][24] = "1";
WOMT_aThesenParteien[16][25] = "1";
WOMT_aThesenParteien[16][26] = "1";
WOMT_aThesenParteien[16][27] = "1";
WOMT_aThesenParteien[16][28] = "1";
WOMT_aThesenParteien[16][29] = "1";
WOMT_aThesenParteien[16][30] = "1";
WOMT_aThesenParteien[16][31] = "1";
WOMT_aThesenParteien[16][32] = "1";
WOMT_aThesenParteien[16][33] = "0";
WOMT_aThesenParteien[16][34] = "1";
WOMT_aThesenParteien[16][35] = "1";
WOMT_aThesenParteien[16][36] = "1";
WOMT_aThesenParteien[16][37] = "1";
WOMT_aThesenParteien[17][0] = "-1";
WOMT_aThesenParteien[17][1] = "-1";
WOMT_aThesenParteien[17][2] = "-1";
WOMT_aThesenParteien[17][3] = "0";
WOMT_aThesenParteien[17][4] = "1";
WOMT_aThesenParteien[17][5] = "1";
WOMT_aThesenParteien[17][6] = "0";
WOMT_aThesenParteien[17][7] = "1";
WOMT_aThesenParteien[17][8] = "1";
WOMT_aThesenParteien[17][9] = "-1";
WOMT_aThesenParteien[17][10] = "0";
WOMT_aThesenParteien[17][11] = "1";
WOMT_aThesenParteien[17][12] = "1";
WOMT_aThesenParteien[17][13] = "1";
WOMT_aThesenParteien[17][14] = "-1";
WOMT_aThesenParteien[17][15] = "-1";
WOMT_aThesenParteien[17][16] = "0";
WOMT_aThesenParteien[17][17] = "0";
WOMT_aThesenParteien[17][18] = "0";
WOMT_aThesenParteien[17][19] = "0";
WOMT_aThesenParteien[17][20] = "-1";
WOMT_aThesenParteien[17][21] = "1";
WOMT_aThesenParteien[17][22] = "-1";
WOMT_aThesenParteien[17][23] = "1";
WOMT_aThesenParteien[17][24] = "1";
WOMT_aThesenParteien[17][25] = "0";
WOMT_aThesenParteien[17][26] = "0";
WOMT_aThesenParteien[17][27] = "0";
WOMT_aThesenParteien[17][28] = "-1";
WOMT_aThesenParteien[17][29] = "-1";
WOMT_aThesenParteien[17][30] = "1";
WOMT_aThesenParteien[17][31] = "-1";
WOMT_aThesenParteien[17][32] = "1";
WOMT_aThesenParteien[17][33] = "0";
WOMT_aThesenParteien[17][34] = "1";
WOMT_aThesenParteien[17][35] = "1";
WOMT_aThesenParteien[17][36] = "-1";
WOMT_aThesenParteien[17][37] = "1";
WOMT_aThesenParteien[18][0] = "1";
WOMT_aThesenParteien[18][1] = "-1";
WOMT_aThesenParteien[18][2] = "1";
WOMT_aThesenParteien[18][3] = "1";
WOMT_aThesenParteien[18][4] = "-1";
WOMT_aThesenParteien[18][5] = "-1";
WOMT_aThesenParteien[18][6] = "1";
WOMT_aThesenParteien[18][7] = "-1";
WOMT_aThesenParteien[18][8] = "-1";
WOMT_aThesenParteien[18][9] = "1";
WOMT_aThesenParteien[18][10] = "1";
WOMT_aThesenParteien[18][11] = "-1";
WOMT_aThesenParteien[18][12] = "-1";
WOMT_aThesenParteien[18][13] = "-1";
WOMT_aThesenParteien[18][14] = "1";
WOMT_aThesenParteien[18][15] = "0";
WOMT_aThesenParteien[18][16] = "-1";
WOMT_aThesenParteien[18][17] = "0";
WOMT_aThesenParteien[18][18] = "1";
WOMT_aThesenParteien[18][19] = "-1";
WOMT_aThesenParteien[18][20] = "1";
WOMT_aThesenParteien[18][21] = "1";
WOMT_aThesenParteien[18][22] = "1";
WOMT_aThesenParteien[18][23] = "-1";
WOMT_aThesenParteien[18][24] = "-1";
WOMT_aThesenParteien[18][25] = "1";
WOMT_aThesenParteien[18][26] = "1";
WOMT_aThesenParteien[18][27] = "1";
WOMT_aThesenParteien[18][28] = "1";
WOMT_aThesenParteien[18][29] = "1";
WOMT_aThesenParteien[18][30] = "1";
WOMT_aThesenParteien[18][31] = "1";
WOMT_aThesenParteien[18][32] = "0";
WOMT_aThesenParteien[18][33] = "0";
WOMT_aThesenParteien[18][34] = "-1";
WOMT_aThesenParteien[18][35] = "1";
WOMT_aThesenParteien[18][36] = "1";
WOMT_aThesenParteien[18][37] = "-1";
WOMT_aThesenParteien[19][0] = "-1";
WOMT_aThesenParteien[19][1] = "1";
WOMT_aThesenParteien[19][2] = "-1";
WOMT_aThesenParteien[19][3] = "1";
WOMT_aThesenParteien[19][4] = "1";
WOMT_aThesenParteien[19][5] = "1";
WOMT_aThesenParteien[19][6] = "1";
WOMT_aThesenParteien[19][7] = "1";
WOMT_aThesenParteien[19][8] = "1";
WOMT_aThesenParteien[19][9] = "1";
WOMT_aThesenParteien[19][10] = "1";
WOMT_aThesenParteien[19][11] = "-1";
WOMT_aThesenParteien[19][12] = "1";
WOMT_aThesenParteien[19][13] = "1";
WOMT_aThesenParteien[19][14] = "-1";
WOMT_aThesenParteien[19][15] = "1";
WOMT_aThesenParteien[19][16] = "0";
WOMT_aThesenParteien[19][17] = "0";
WOMT_aThesenParteien[19][18] = "1";
WOMT_aThesenParteien[19][19] = "1";
WOMT_aThesenParteien[19][20] = "1";
WOMT_aThesenParteien[19][21] = "-1";
WOMT_aThesenParteien[19][22] = "1";
WOMT_aThesenParteien[19][23] = "1";
WOMT_aThesenParteien[19][24] = "1";
WOMT_aThesenParteien[19][25] = "-1";
WOMT_aThesenParteien[19][26] = "-1";
WOMT_aThesenParteien[19][27] = "0";
WOMT_aThesenParteien[19][28] = "1";
WOMT_aThesenParteien[19][29] = "-1";
WOMT_aThesenParteien[19][30] = "1";
WOMT_aThesenParteien[19][31] = "-1";
WOMT_aThesenParteien[19][32] = "1";
WOMT_aThesenParteien[19][33] = "0";
WOMT_aThesenParteien[19][34] = "-1";
WOMT_aThesenParteien[19][35] = "1";
WOMT_aThesenParteien[19][36] = "1";
WOMT_aThesenParteien[19][37] = "1";
WOMT_aThesenParteien[20][0] = "1";
WOMT_aThesenParteien[20][1] = "1";
WOMT_aThesenParteien[20][2] = "1";
WOMT_aThesenParteien[20][3] = "1";
WOMT_aThesenParteien[20][4] = "1";
WOMT_aThesenParteien[20][5] = "1";
WOMT_aThesenParteien[20][6] = "1";
WOMT_aThesenParteien[20][7] = "1";
WOMT_aThesenParteien[20][8] = "1";
WOMT_aThesenParteien[20][9] = "-1";
WOMT_aThesenParteien[20][10] = "1";
WOMT_aThesenParteien[20][11] = "1";
WOMT_aThesenParteien[20][12] = "1";
WOMT_aThesenParteien[20][13] = "1";
WOMT_aThesenParteien[20][14] = "0";
WOMT_aThesenParteien[20][15] = "1";
WOMT_aThesenParteien[20][16] = "1";
WOMT_aThesenParteien[20][17] = "0";
WOMT_aThesenParteien[20][18] = "0";
WOMT_aThesenParteien[20][19] = "1";
WOMT_aThesenParteien[20][20] = "0";
WOMT_aThesenParteien[20][21] = "-1";
WOMT_aThesenParteien[20][22] = "1";
WOMT_aThesenParteien[20][23] = "1";
WOMT_aThesenParteien[20][24] = "1";
WOMT_aThesenParteien[20][25] = "0";
WOMT_aThesenParteien[20][26] = "1";
WOMT_aThesenParteien[20][27] = "-1";
WOMT_aThesenParteien[20][28] = "-1";
WOMT_aThesenParteien[20][29] = "-1";
WOMT_aThesenParteien[20][30] = "1";
WOMT_aThesenParteien[20][31] = "1";
WOMT_aThesenParteien[20][32] = "1";
WOMT_aThesenParteien[20][33] = "0";
WOMT_aThesenParteien[20][34] = "1";
WOMT_aThesenParteien[20][35] = "1";
WOMT_aThesenParteien[20][36] = "0";
WOMT_aThesenParteien[20][37] = "1";
WOMT_aThesenParteien[21][0] = "0";
WOMT_aThesenParteien[21][1] = "-1";
WOMT_aThesenParteien[21][2] = "1";
WOMT_aThesenParteien[21][3] = "1";
WOMT_aThesenParteien[21][4] = "-1";
WOMT_aThesenParteien[21][5] = "1";
WOMT_aThesenParteien[21][6] = "1";
WOMT_aThesenParteien[21][7] = "1";
WOMT_aThesenParteien[21][8] = "0";
WOMT_aThesenParteien[21][9] = "1";
WOMT_aThesenParteien[21][10] = "1";
WOMT_aThesenParteien[21][11] = "1";
WOMT_aThesenParteien[21][12] = "1";
WOMT_aThesenParteien[21][13] = "1";
WOMT_aThesenParteien[21][14] = "1";
WOMT_aThesenParteien[21][15] = "0";
WOMT_aThesenParteien[21][16] = "-1";
WOMT_aThesenParteien[21][17] = "0";
WOMT_aThesenParteien[21][18] = "0";
WOMT_aThesenParteien[21][19] = "-1";
WOMT_aThesenParteien[21][20] = "1";
WOMT_aThesenParteien[21][21] = "-1";
WOMT_aThesenParteien[21][22] = "0";
WOMT_aThesenParteien[21][23] = "1";
WOMT_aThesenParteien[21][24] = "-1";
WOMT_aThesenParteien[21][25] = "1";
WOMT_aThesenParteien[21][26] = "1";
WOMT_aThesenParteien[21][27] = "0";
WOMT_aThesenParteien[21][28] = "1";
WOMT_aThesenParteien[21][29] = "-1";
WOMT_aThesenParteien[21][30] = "1";
WOMT_aThesenParteien[21][31] = "1";
WOMT_aThesenParteien[21][32] = "1";
WOMT_aThesenParteien[21][33] = "0";
WOMT_aThesenParteien[21][34] = "1";
WOMT_aThesenParteien[21][35] = "-1";
WOMT_aThesenParteien[21][36] = "1";
WOMT_aThesenParteien[21][37] = "-1";
WOMT_aThesenParteien[22][0] = "1";
WOMT_aThesenParteien[22][1] = "1";
WOMT_aThesenParteien[22][2] = "0";
WOMT_aThesenParteien[22][3] = "1";
WOMT_aThesenParteien[22][4] = "-1";
WOMT_aThesenParteien[22][5] = "1";
WOMT_aThesenParteien[22][6] = "1";
WOMT_aThesenParteien[22][7] = "-1";
WOMT_aThesenParteien[22][8] = "-1";
WOMT_aThesenParteien[22][9] = "-1";
WOMT_aThesenParteien[22][10] = "-1";
WOMT_aThesenParteien[22][11] = "1";
WOMT_aThesenParteien[22][12] = "-1";
WOMT_aThesenParteien[22][13] = "-1";
WOMT_aThesenParteien[22][14] = "1";
WOMT_aThesenParteien[22][15] = "-1";
WOMT_aThesenParteien[22][16] = "-1";
WOMT_aThesenParteien[22][17] = "0";
WOMT_aThesenParteien[22][18] = "-1";
WOMT_aThesenParteien[22][19] = "-1";
WOMT_aThesenParteien[22][20] = "-1";
WOMT_aThesenParteien[22][21] = "1";
WOMT_aThesenParteien[22][22] = "-1";
WOMT_aThesenParteien[22][23] = "-1";
WOMT_aThesenParteien[22][24] = "-1";
WOMT_aThesenParteien[22][25] = "-1";
WOMT_aThesenParteien[22][26] = "1";
WOMT_aThesenParteien[22][27] = "-1";
WOMT_aThesenParteien[22][28] = "-1";
WOMT_aThesenParteien[22][29] = "-1";
WOMT_aThesenParteien[22][30] = "1";
WOMT_aThesenParteien[22][31] = "-1";
WOMT_aThesenParteien[22][32] = "-1";
WOMT_aThesenParteien[22][33] = "0";
WOMT_aThesenParteien[22][34] = "1";
WOMT_aThesenParteien[22][35] = "-1";
WOMT_aThesenParteien[22][36] = "-1";
WOMT_aThesenParteien[22][37] = "-1";
WOMT_aThesenParteien[23][0] = "-1";
WOMT_aThesenParteien[23][1] = "1";
WOMT_aThesenParteien[23][2] = "-1";
WOMT_aThesenParteien[23][3] = "1";
WOMT_aThesenParteien[23][4] = "1";
WOMT_aThesenParteien[23][5] = "1";
WOMT_aThesenParteien[23][6] = "1";
WOMT_aThesenParteien[23][7] = "1";
WOMT_aThesenParteien[23][8] = "1";
WOMT_aThesenParteien[23][9] = "-1";
WOMT_aThesenParteien[23][10] = "1";
WOMT_aThesenParteien[23][11] = "1";
WOMT_aThesenParteien[23][12] = "1";
WOMT_aThesenParteien[23][13] = "1";
WOMT_aThesenParteien[23][14] = "-1";
WOMT_aThesenParteien[23][15] = "1";
WOMT_aThesenParteien[23][16] = "0";
WOMT_aThesenParteien[23][17] = "0";
WOMT_aThesenParteien[23][18] = "1";
WOMT_aThesenParteien[23][19] = "1";
WOMT_aThesenParteien[23][20] = "1";
WOMT_aThesenParteien[23][21] = "-1";
WOMT_aThesenParteien[23][22] = "1";
WOMT_aThesenParteien[23][23] = "1";
WOMT_aThesenParteien[23][24] = "1";
WOMT_aThesenParteien[23][25] = "0";
WOMT_aThesenParteien[23][26] = "-1";
WOMT_aThesenParteien[23][27] = "1";
WOMT_aThesenParteien[23][28] = "-1";
WOMT_aThesenParteien[23][29] = "1";
WOMT_aThesenParteien[23][30] = "1";
WOMT_aThesenParteien[23][31] = "-1";
WOMT_aThesenParteien[23][32] = "1";
WOMT_aThesenParteien[23][33] = "0";
WOMT_aThesenParteien[23][34] = "1";
WOMT_aThesenParteien[23][35] = "1";
WOMT_aThesenParteien[23][36] = "1";
WOMT_aThesenParteien[23][37] = "1";
WOMT_aThesenParteien[24][0] = "-1";
WOMT_aThesenParteien[24][1] = "-1";
WOMT_aThesenParteien[24][2] = "1";
WOMT_aThesenParteien[24][3] = "-1";
WOMT_aThesenParteien[24][4] = "-1";
WOMT_aThesenParteien[24][5] = "-1";
WOMT_aThesenParteien[24][6] = "-1";
WOMT_aThesenParteien[24][7] = "-1";
WOMT_aThesenParteien[24][8] = "-1";
WOMT_aThesenParteien[24][9] = "1";
WOMT_aThesenParteien[24][10] = "-1";
WOMT_aThesenParteien[24][11] = "-1";
WOMT_aThesenParteien[24][12] = "-1";
WOMT_aThesenParteien[24][13] = "-1";
WOMT_aThesenParteien[24][14] = "-1";
WOMT_aThesenParteien[24][15] = "-1";
WOMT_aThesenParteien[24][16] = "0";
WOMT_aThesenParteien[24][17] = "0";
WOMT_aThesenParteien[24][18] = "0";
WOMT_aThesenParteien[24][19] = "1";
WOMT_aThesenParteien[24][20] = "-1";
WOMT_aThesenParteien[24][21] = "1";
WOMT_aThesenParteien[24][22] = "-1";
WOMT_aThesenParteien[24][23] = "-1";
WOMT_aThesenParteien[24][24] = "-1";
WOMT_aThesenParteien[24][25] = "0";
WOMT_aThesenParteien[24][26] = "-1";
WOMT_aThesenParteien[24][27] = "-1";
WOMT_aThesenParteien[24][28] = "1";
WOMT_aThesenParteien[24][29] = "-1";
WOMT_aThesenParteien[24][30] = "-1";
WOMT_aThesenParteien[24][31] = "-1";
WOMT_aThesenParteien[24][32] = "-1";
WOMT_aThesenParteien[24][33] = "-1";
WOMT_aThesenParteien[24][34] = "-1";
WOMT_aThesenParteien[24][35] = "-1";
WOMT_aThesenParteien[24][36] = "-1";
WOMT_aThesenParteien[24][37] = "-1";
WOMT_aThesenParteien[25][0] = "0";
WOMT_aThesenParteien[25][1] = "1";
WOMT_aThesenParteien[25][2] = "-1";
WOMT_aThesenParteien[25][3] = "-1";
WOMT_aThesenParteien[25][4] = "1";
WOMT_aThesenParteien[25][5] = "1";
WOMT_aThesenParteien[25][6] = "-1";
WOMT_aThesenParteien[25][7] = "1";
WOMT_aThesenParteien[25][8] = "0";
WOMT_aThesenParteien[25][9] = "-1";
WOMT_aThesenParteien[25][10] = "-1";
WOMT_aThesenParteien[25][11] = "-1";
WOMT_aThesenParteien[25][12] = "-1";
WOMT_aThesenParteien[25][13] = "1";
WOMT_aThesenParteien[25][14] = "-1";
WOMT_aThesenParteien[25][15] = "0";
WOMT_aThesenParteien[25][16] = "0";
WOMT_aThesenParteien[25][17] = "0";
WOMT_aThesenParteien[25][18] = "-1";
WOMT_aThesenParteien[25][19] = "-1";
WOMT_aThesenParteien[25][20] = "-1";
WOMT_aThesenParteien[25][21] = "-1";
WOMT_aThesenParteien[25][22] = "-1";
WOMT_aThesenParteien[25][23] = "1";
WOMT_aThesenParteien[25][24] = "-1";
WOMT_aThesenParteien[25][25] = "-1";
WOMT_aThesenParteien[25][26] = "-1";
WOMT_aThesenParteien[25][27] = "-1";
WOMT_aThesenParteien[25][28] = "-1";
WOMT_aThesenParteien[25][29] = "-1";
WOMT_aThesenParteien[25][30] = "1";
WOMT_aThesenParteien[25][31] = "-1";
WOMT_aThesenParteien[25][32] = "0";
WOMT_aThesenParteien[25][33] = "0";
WOMT_aThesenParteien[25][34] = "-1";
WOMT_aThesenParteien[25][35] = "-1";
WOMT_aThesenParteien[25][36] = "-1";
WOMT_aThesenParteien[25][37] = "1";
WOMT_aThesenParteien[26][0] = "1";
WOMT_aThesenParteien[26][1] = "-1";
WOMT_aThesenParteien[26][2] = "-1";
WOMT_aThesenParteien[26][3] = "1";
WOMT_aThesenParteien[26][4] = "-1";
WOMT_aThesenParteien[26][5] = "1";
WOMT_aThesenParteien[26][6] = "-1";
WOMT_aThesenParteien[26][7] = "-1";
WOMT_aThesenParteien[26][8] = "-1";
WOMT_aThesenParteien[26][9] = "-1";
WOMT_aThesenParteien[26][10] = "-1";
WOMT_aThesenParteien[26][11] = "-1";
WOMT_aThesenParteien[26][12] = "-1";
WOMT_aThesenParteien[26][13] = "-1";
WOMT_aThesenParteien[26][14] = "-1";
WOMT_aThesenParteien[26][15] = "-1";
WOMT_aThesenParteien[26][16] = "-1";
WOMT_aThesenParteien[26][17] = "0";
WOMT_aThesenParteien[26][18] = "-1";
WOMT_aThesenParteien[26][19] = "-1";
WOMT_aThesenParteien[26][20] = "-1";
WOMT_aThesenParteien[26][21] = "-1";
WOMT_aThesenParteien[26][22] = "-1";
WOMT_aThesenParteien[26][23] = "-1";
WOMT_aThesenParteien[26][24] = "-1";
WOMT_aThesenParteien[26][25] = "-1";
WOMT_aThesenParteien[26][26] = "-1";
WOMT_aThesenParteien[26][27] = "-1";
WOMT_aThesenParteien[26][28] = "0";
WOMT_aThesenParteien[26][29] = "1";
WOMT_aThesenParteien[26][30] = "1";
WOMT_aThesenParteien[26][31] = "-1";
WOMT_aThesenParteien[26][32] = "-1";
WOMT_aThesenParteien[26][33] = "0";
WOMT_aThesenParteien[26][34] = "-1";
WOMT_aThesenParteien[26][35] = "-1";
WOMT_aThesenParteien[26][36] = "-1";
WOMT_aThesenParteien[26][37] = "-1";
WOMT_aThesenParteien[27][0] = "-1";
WOMT_aThesenParteien[27][1] = "1";
WOMT_aThesenParteien[27][2] = "-1";
WOMT_aThesenParteien[27][3] = "-1";
WOMT_aThesenParteien[27][4] = "1";
WOMT_aThesenParteien[27][5] = "1";
WOMT_aThesenParteien[27][6] = "-1";
WOMT_aThesenParteien[27][7] = "1";
WOMT_aThesenParteien[27][8] = "1";
WOMT_aThesenParteien[27][9] = "-1";
WOMT_aThesenParteien[27][10] = "1";
WOMT_aThesenParteien[27][11] = "1";
WOMT_aThesenParteien[27][12] = "1";
WOMT_aThesenParteien[27][13] = "1";
WOMT_aThesenParteien[27][14] = "-1";
WOMT_aThesenParteien[27][15] = "1";
WOMT_aThesenParteien[27][16] = "1";
WOMT_aThesenParteien[27][17] = "0";
WOMT_aThesenParteien[27][18] = "1";
WOMT_aThesenParteien[27][19] = "1";
WOMT_aThesenParteien[27][20] = "1";
WOMT_aThesenParteien[27][21] = "1";
WOMT_aThesenParteien[27][22] = "0";
WOMT_aThesenParteien[27][23] = "1";
WOMT_aThesenParteien[27][24] = "1";
WOMT_aThesenParteien[27][25] = "1";
WOMT_aThesenParteien[27][26] = "1";
WOMT_aThesenParteien[27][27] = "1";
WOMT_aThesenParteien[27][28] = "1";
WOMT_aThesenParteien[27][29] = "-1";
WOMT_aThesenParteien[27][30] = "1";
WOMT_aThesenParteien[27][31] = "-1";
WOMT_aThesenParteien[27][32] = "-1";
WOMT_aThesenParteien[27][33] = "0";
WOMT_aThesenParteien[27][34] = "1";
WOMT_aThesenParteien[27][35] = "-1";
WOMT_aThesenParteien[27][36] = "1";
WOMT_aThesenParteien[27][37] = "-1";
WOMT_aThesenParteien[28][0] = "1";
WOMT_aThesenParteien[28][1] = "-1";
WOMT_aThesenParteien[28][2] = "0";
WOMT_aThesenParteien[28][3] = "-1";
WOMT_aThesenParteien[28][4] = "-1";
WOMT_aThesenParteien[28][5] = "-1";
WOMT_aThesenParteien[28][6] = "0";
WOMT_aThesenParteien[28][7] = "-1";
WOMT_aThesenParteien[28][8] = "-1";
WOMT_aThesenParteien[28][9] = "-1";
WOMT_aThesenParteien[28][10] = "-1";
WOMT_aThesenParteien[28][11] = "-1";
WOMT_aThesenParteien[28][12] = "-1";
WOMT_aThesenParteien[28][13] = "-1";
WOMT_aThesenParteien[28][14] = "-1";
WOMT_aThesenParteien[28][15] = "0";
WOMT_aThesenParteien[28][16] = "-1";
WOMT_aThesenParteien[28][17] = "0";
WOMT_aThesenParteien[28][18] = "-1";
WOMT_aThesenParteien[28][19] = "-1";
WOMT_aThesenParteien[28][20] = "0";
WOMT_aThesenParteien[28][21] = "-1";
WOMT_aThesenParteien[28][22] = "-1";
WOMT_aThesenParteien[28][23] = "-1";
WOMT_aThesenParteien[28][24] = "-1";
WOMT_aThesenParteien[28][25] = "-1";
WOMT_aThesenParteien[28][26] = "-1";
WOMT_aThesenParteien[28][27] = "1";
WOMT_aThesenParteien[28][28] = "-1";
WOMT_aThesenParteien[28][29] = "-1";
WOMT_aThesenParteien[28][30] = "1";
WOMT_aThesenParteien[28][31] = "-1";
WOMT_aThesenParteien[28][32] = "-1";
WOMT_aThesenParteien[28][33] = "0";
WOMT_aThesenParteien[28][34] = "-1";
WOMT_aThesenParteien[28][35] = "-1";
WOMT_aThesenParteien[28][36] = "0";
WOMT_aThesenParteien[28][37] = "-1";
WOMT_aThesenParteien[29][0] = "1";
WOMT_aThesenParteien[29][1] = "1";
WOMT_aThesenParteien[29][2] = "1";
WOMT_aThesenParteien[29][3] = "1";
WOMT_aThesenParteien[29][4] = "-1";
WOMT_aThesenParteien[29][5] = "0";
WOMT_aThesenParteien[29][6] = "1";
WOMT_aThesenParteien[29][7] = "1";
WOMT_aThesenParteien[29][8] = "1";
WOMT_aThesenParteien[29][9] = "-1";
WOMT_aThesenParteien[29][10] = "1";
WOMT_aThesenParteien[29][11] = "-1";
WOMT_aThesenParteien[29][12] = "1";
WOMT_aThesenParteien[29][13] = "-1";
WOMT_aThesenParteien[29][14] = "1";
WOMT_aThesenParteien[29][15] = "-1";
WOMT_aThesenParteien[29][16] = "0";
WOMT_aThesenParteien[29][17] = "0";
WOMT_aThesenParteien[29][18] = "1";
WOMT_aThesenParteien[29][19] = "-1";
WOMT_aThesenParteien[29][20] = "-1";
WOMT_aThesenParteien[29][21] = "1";
WOMT_aThesenParteien[29][22] = "0";
WOMT_aThesenParteien[29][23] = "-1";
WOMT_aThesenParteien[29][24] = "-1";
WOMT_aThesenParteien[29][25] = "0";
WOMT_aThesenParteien[29][26] = "1";
WOMT_aThesenParteien[29][27] = "-1";
WOMT_aThesenParteien[29][28] = "-1";
WOMT_aThesenParteien[29][29] = "1";
WOMT_aThesenParteien[29][30] = "1";
WOMT_aThesenParteien[29][31] = "-1";
WOMT_aThesenParteien[29][32] = "1";
WOMT_aThesenParteien[29][33] = "-1";
WOMT_aThesenParteien[29][34] = "-1";
WOMT_aThesenParteien[29][35] = "1";
WOMT_aThesenParteien[29][36] = "-1";
WOMT_aThesenParteien[29][37] = "-1";
WOMT_aThesenParteien[30][0] = "0";
WOMT_aThesenParteien[30][1] = "1";
WOMT_aThesenParteien[30][2] = "-1";
WOMT_aThesenParteien[30][3] = "-1";
WOMT_aThesenParteien[30][4] = "1";
WOMT_aThesenParteien[30][5] = "1";
WOMT_aThesenParteien[30][6] = "0";
WOMT_aThesenParteien[30][7] = "1";
WOMT_aThesenParteien[30][8] = "1";
WOMT_aThesenParteien[30][9] = "1";
WOMT_aThesenParteien[30][10] = "1";
WOMT_aThesenParteien[30][11] = "1";
WOMT_aThesenParteien[30][12] = "1";
WOMT_aThesenParteien[30][13] = "1";
WOMT_aThesenParteien[30][14] = "-1";
WOMT_aThesenParteien[30][15] = "1";
WOMT_aThesenParteien[30][16] = "1";
WOMT_aThesenParteien[30][17] = "0";
WOMT_aThesenParteien[30][18] = "1";
WOMT_aThesenParteien[30][19] = "1";
WOMT_aThesenParteien[30][20] = "1";
WOMT_aThesenParteien[30][21] = "-1";
WOMT_aThesenParteien[30][22] = "-1";
WOMT_aThesenParteien[30][23] = "1";
WOMT_aThesenParteien[30][24] = "1";
WOMT_aThesenParteien[30][25] = "1";
WOMT_aThesenParteien[30][26] = "-1";
WOMT_aThesenParteien[30][27] = "1";
WOMT_aThesenParteien[30][28] = "1";
WOMT_aThesenParteien[30][29] = "-1";
WOMT_aThesenParteien[30][30] = "1";
WOMT_aThesenParteien[30][31] = "-1";
WOMT_aThesenParteien[30][32] = "1";
WOMT_aThesenParteien[30][33] = "1";
WOMT_aThesenParteien[30][34] = "1";
WOMT_aThesenParteien[30][35] = "1";
WOMT_aThesenParteien[30][36] = "1";
WOMT_aThesenParteien[30][37] = "1";
WOMT_aThesenParteien[31][0] = "0";
WOMT_aThesenParteien[31][1] = "1";
WOMT_aThesenParteien[31][2] = "-1";
WOMT_aThesenParteien[31][3] = "1";
WOMT_aThesenParteien[31][4] = "1";
WOMT_aThesenParteien[31][5] = "1";
WOMT_aThesenParteien[31][6] = "-1";
WOMT_aThesenParteien[31][7] = "1";
WOMT_aThesenParteien[31][8] = "1";
WOMT_aThesenParteien[31][9] = "-1";
WOMT_aThesenParteien[31][10] = "1";
WOMT_aThesenParteien[31][11] = "1";
WOMT_aThesenParteien[31][12] = "1";
WOMT_aThesenParteien[31][13] = "1";
WOMT_aThesenParteien[31][14] = "-1";
WOMT_aThesenParteien[31][15] = "1";
WOMT_aThesenParteien[31][16] = "0";
WOMT_aThesenParteien[31][17] = "0";
WOMT_aThesenParteien[31][18] = "0";
WOMT_aThesenParteien[31][19] = "0";
WOMT_aThesenParteien[31][20] = "-1";
WOMT_aThesenParteien[31][21] = "1";
WOMT_aThesenParteien[31][22] = "0";
WOMT_aThesenParteien[31][23] = "1";
WOMT_aThesenParteien[31][24] = "1";
WOMT_aThesenParteien[31][25] = "0";
WOMT_aThesenParteien[31][26] = "-1";
WOMT_aThesenParteien[31][27] = "0";
WOMT_aThesenParteien[31][28] = "-1";
WOMT_aThesenParteien[31][29] = "-1";
WOMT_aThesenParteien[31][30] = "-1";
WOMT_aThesenParteien[31][31] = "-1";
WOMT_aThesenParteien[31][32] = "1";
WOMT_aThesenParteien[31][33] = "0";
WOMT_aThesenParteien[31][34] = "1";
WOMT_aThesenParteien[31][35] = "1";
WOMT_aThesenParteien[31][36] = "0";
WOMT_aThesenParteien[31][37] = "1";
WOMT_aThesenParteien[32][0] = "0";
WOMT_aThesenParteien[32][1] = "-1";
WOMT_aThesenParteien[32][2] = "-1";
WOMT_aThesenParteien[32][3] = "0";
WOMT_aThesenParteien[32][4] = "0";
WOMT_aThesenParteien[32][5] = "1";
WOMT_aThesenParteien[32][6] = "-1";
WOMT_aThesenParteien[32][7] = "1";
WOMT_aThesenParteien[32][8] = "1";
WOMT_aThesenParteien[32][9] = "-1";
WOMT_aThesenParteien[32][10] = "1";
WOMT_aThesenParteien[32][11] = "1";
WOMT_aThesenParteien[32][12] = "1";
WOMT_aThesenParteien[32][13] = "1";
WOMT_aThesenParteien[32][14] = "-1";
WOMT_aThesenParteien[32][15] = "-1";
WOMT_aThesenParteien[32][16] = "-1";
WOMT_aThesenParteien[32][17] = "0";
WOMT_aThesenParteien[32][18] = "-1";
WOMT_aThesenParteien[32][19] = "-1";
WOMT_aThesenParteien[32][20] = "-1";
WOMT_aThesenParteien[32][21] = "-1";
WOMT_aThesenParteien[32][22] = "1";
WOMT_aThesenParteien[32][23] = "-1";
WOMT_aThesenParteien[32][24] = "-1";
WOMT_aThesenParteien[32][25] = "-1";
WOMT_aThesenParteien[32][26] = "-1";
WOMT_aThesenParteien[32][27] = "-1";
WOMT_aThesenParteien[32][28] = "-1";
WOMT_aThesenParteien[32][29] = "-1";
WOMT_aThesenParteien[32][30] = "1";
WOMT_aThesenParteien[32][31] = "-1";
WOMT_aThesenParteien[32][32] = "-1";
WOMT_aThesenParteien[32][33] = "0";
WOMT_aThesenParteien[32][34] = "-1";
WOMT_aThesenParteien[32][35] = "-1";
WOMT_aThesenParteien[32][36] = "-1";
WOMT_aThesenParteien[32][37] = "1";
WOMT_aThesenParteien[33][0] = "1";
WOMT_aThesenParteien[33][1] = "1";
WOMT_aThesenParteien[33][2] = "1";
WOMT_aThesenParteien[33][3] = "1";
WOMT_aThesenParteien[33][4] = "-1";
WOMT_aThesenParteien[33][5] = "0";
WOMT_aThesenParteien[33][6] = "1";
WOMT_aThesenParteien[33][7] = "-1";
WOMT_aThesenParteien[33][8] = "0";
WOMT_aThesenParteien[33][9] = "0";
WOMT_aThesenParteien[33][10] = "1";
WOMT_aThesenParteien[33][11] = "-1";
WOMT_aThesenParteien[33][12] = "1";
WOMT_aThesenParteien[33][13] = "0";
WOMT_aThesenParteien[33][14] = "1";
WOMT_aThesenParteien[33][15] = "1";
WOMT_aThesenParteien[33][16] = "0";
WOMT_aThesenParteien[33][17] = "0";
WOMT_aThesenParteien[33][18] = "-1";
WOMT_aThesenParteien[33][19] = "-1";
WOMT_aThesenParteien[33][20] = "1";
WOMT_aThesenParteien[33][21] = "-1";
WOMT_aThesenParteien[33][22] = "1";
WOMT_aThesenParteien[33][23] = "-1";
WOMT_aThesenParteien[33][24] = "-1";
WOMT_aThesenParteien[33][25] = "1";
WOMT_aThesenParteien[33][26] = "1";
WOMT_aThesenParteien[33][27] = "1";
WOMT_aThesenParteien[33][28] = "0";
WOMT_aThesenParteien[33][29] = "-1";
WOMT_aThesenParteien[33][30] = "1";
WOMT_aThesenParteien[33][31] = "1";
WOMT_aThesenParteien[33][32] = "1";
WOMT_aThesenParteien[33][33] = "0";
WOMT_aThesenParteien[33][34] = "0";
WOMT_aThesenParteien[33][35] = "1";
WOMT_aThesenParteien[33][36] = "1";
WOMT_aThesenParteien[33][37] = "-1";
WOMT_aThesenParteien[34][0] = "1";
WOMT_aThesenParteien[34][1] = "1";
WOMT_aThesenParteien[34][2] = "1";
WOMT_aThesenParteien[34][3] = "1";
WOMT_aThesenParteien[34][4] = "-1";
WOMT_aThesenParteien[34][5] = "-1";
WOMT_aThesenParteien[34][6] = "1";
WOMT_aThesenParteien[34][7] = "1";
WOMT_aThesenParteien[34][8] = "-1";
WOMT_aThesenParteien[34][9] = "1";
WOMT_aThesenParteien[34][10] = "-1";
WOMT_aThesenParteien[34][11] = "0";
WOMT_aThesenParteien[34][12] = "-1";
WOMT_aThesenParteien[34][13] = "-1";
WOMT_aThesenParteien[34][14] = "1";
WOMT_aThesenParteien[34][15] = "0";
WOMT_aThesenParteien[34][16] = "-1";
WOMT_aThesenParteien[34][17] = "0";
WOMT_aThesenParteien[34][18] = "1";
WOMT_aThesenParteien[34][19] = "-1";
WOMT_aThesenParteien[34][20] = "1";
WOMT_aThesenParteien[34][21] = "-1";
WOMT_aThesenParteien[34][22] = "-1";
WOMT_aThesenParteien[34][23] = "-1";
WOMT_aThesenParteien[34][24] = "-1";
WOMT_aThesenParteien[34][25] = "1";
WOMT_aThesenParteien[34][26] = "1";
WOMT_aThesenParteien[34][27] = "1";
WOMT_aThesenParteien[34][28] = "1";
WOMT_aThesenParteien[34][29] = "1";
WOMT_aThesenParteien[34][30] = "1";
WOMT_aThesenParteien[34][31] = "1";
WOMT_aThesenParteien[34][32] = "1";
WOMT_aThesenParteien[34][33] = "-1";
WOMT_aThesenParteien[34][34] = "-1";
WOMT_aThesenParteien[34][35] = "0";
WOMT_aThesenParteien[34][36] = "1";
WOMT_aThesenParteien[34][37] = "-1";
WOMT_aThesenParteien[35][0] = "0";
WOMT_aThesenParteien[35][1] = "1";
WOMT_aThesenParteien[35][2] = "-1";
WOMT_aThesenParteien[35][3] = "-1";
WOMT_aThesenParteien[35][4] = "1";
WOMT_aThesenParteien[35][5] = "1";
WOMT_aThesenParteien[35][6] = "0";
WOMT_aThesenParteien[35][7] = "1";
WOMT_aThesenParteien[35][8] = "1";
WOMT_aThesenParteien[35][9] = "1";
WOMT_aThesenParteien[35][10] = "1";
WOMT_aThesenParteien[35][11] = "1";
WOMT_aThesenParteien[35][12] = "1";
WOMT_aThesenParteien[35][13] = "1";
WOMT_aThesenParteien[35][14] = "-1";
WOMT_aThesenParteien[35][15] = "1";
WOMT_aThesenParteien[35][16] = "1";
WOMT_aThesenParteien[35][17] = "0";
WOMT_aThesenParteien[35][18] = "1";
WOMT_aThesenParteien[35][19] = "1";
WOMT_aThesenParteien[35][20] = "1";
WOMT_aThesenParteien[35][21] = "1";
WOMT_aThesenParteien[35][22] = "0";
WOMT_aThesenParteien[35][23] = "1";
WOMT_aThesenParteien[35][24] = "1";
WOMT_aThesenParteien[35][25] = "1";
WOMT_aThesenParteien[35][26] = "1";
WOMT_aThesenParteien[35][27] = "1";
WOMT_aThesenParteien[35][28] = "1";
WOMT_aThesenParteien[35][29] = "1";
WOMT_aThesenParteien[35][30] = "1";
WOMT_aThesenParteien[35][31] = "-1";
WOMT_aThesenParteien[35][32] = "0";
WOMT_aThesenParteien[35][33] = "1";
WOMT_aThesenParteien[35][34] = "1";
WOMT_aThesenParteien[35][35] = "-1";
WOMT_aThesenParteien[35][36] = "1";
WOMT_aThesenParteien[35][37] = "1";
WOMT_aThesenParteien[36][0] = "-1";
WOMT_aThesenParteien[36][1] = "1";
WOMT_aThesenParteien[36][2] = "-1";
WOMT_aThesenParteien[36][3] = "-1";
WOMT_aThesenParteien[36][4] = "1";
WOMT_aThesenParteien[36][5] = "1";
WOMT_aThesenParteien[36][6] = "1";
WOMT_aThesenParteien[36][7] = "1";
WOMT_aThesenParteien[36][8] = "1";
WOMT_aThesenParteien[36][9] = "1";
WOMT_aThesenParteien[36][10] = "1";
WOMT_aThesenParteien[36][11] = "1";
WOMT_aThesenParteien[36][12] = "1";
WOMT_aThesenParteien[36][13] = "1";
WOMT_aThesenParteien[36][14] = "1";
WOMT_aThesenParteien[36][15] = "1";
WOMT_aThesenParteien[36][16] = "1";
WOMT_aThesenParteien[36][17] = "0";
WOMT_aThesenParteien[36][18] = "0";
WOMT_aThesenParteien[36][19] = "1";
WOMT_aThesenParteien[36][20] = "1";
WOMT_aThesenParteien[36][21] = "-1";
WOMT_aThesenParteien[36][22] = "1";
WOMT_aThesenParteien[36][23] = "0";
WOMT_aThesenParteien[36][24] = "-1";
WOMT_aThesenParteien[36][25] = "1";
WOMT_aThesenParteien[36][26] = "-1";
WOMT_aThesenParteien[36][27] = "1";
WOMT_aThesenParteien[36][28] = "-1";
WOMT_aThesenParteien[36][29] = "-1";
WOMT_aThesenParteien[36][30] = "-1";
WOMT_aThesenParteien[36][31] = "-1";
WOMT_aThesenParteien[36][32] = "1";
WOMT_aThesenParteien[36][33] = "0";
WOMT_aThesenParteien[36][34] = "1";
WOMT_aThesenParteien[36][35] = "1";
WOMT_aThesenParteien[36][36] = "0";
WOMT_aThesenParteien[36][37] = "1";
WOMT_aThesenParteien[37][0] = "1";
WOMT_aThesenParteien[37][1] = "-1";
WOMT_aThesenParteien[37][2] = "1";
WOMT_aThesenParteien[37][3] = "0";
WOMT_aThesenParteien[37][4] = "-1";
WOMT_aThesenParteien[37][5] = "-1";
WOMT_aThesenParteien[37][6] = "1";
WOMT_aThesenParteien[37][7] = "-1";
WOMT_aThesenParteien[37][8] = "-1";
WOMT_aThesenParteien[37][9] = "1";
WOMT_aThesenParteien[37][10] = "1";
WOMT_aThesenParteien[37][11] = "-1";
WOMT_aThesenParteien[37][12] = "-1";
WOMT_aThesenParteien[37][13] = "0";
WOMT_aThesenParteien[37][14] = "1";
WOMT_aThesenParteien[37][15] = "1";
WOMT_aThesenParteien[37][16] = "-1";
WOMT_aThesenParteien[37][17] = "0";
WOMT_aThesenParteien[37][18] = "1";
WOMT_aThesenParteien[37][19] = "-1";
WOMT_aThesenParteien[37][20] = "1";
WOMT_aThesenParteien[37][21] = "1";
WOMT_aThesenParteien[37][22] = "-1";
WOMT_aThesenParteien[37][23] = "-1";
WOMT_aThesenParteien[37][24] = "-1";
WOMT_aThesenParteien[37][25] = "1";
WOMT_aThesenParteien[37][26] = "1";
WOMT_aThesenParteien[37][27] = "1";
WOMT_aThesenParteien[37][28] = "1";
WOMT_aThesenParteien[37][29] = "1";
WOMT_aThesenParteien[37][30] = "1";
WOMT_aThesenParteien[37][31] = "1";
WOMT_aThesenParteien[37][32] = "-1";
WOMT_aThesenParteien[37][33] = "-1";
WOMT_aThesenParteien[37][34] = "1";
WOMT_aThesenParteien[37][35] = "1";
WOMT_aThesenParteien[37][36] = "0";
WOMT_aThesenParteien[37][37] = "1";
WOMT_aParteienURL[0] = "";
WOMT_aParteiFix[0] = 1;
WOMT_aParteienLogos[0] = new Array();
WOMT_aParteienLogos[0][0] = "images/parteien_logo_14661.png";
WOMT_aParteienLogos[0][1] = "140";
WOMT_aParteienLogos[0][2] = "140";
WOMT_aParteienChecksum[0] = new Array();
WOMT_aParteienChecksum[0][0] =
  "038-014-009-015#2ecb78fa59cd6bfefb29e3d0fbe98b88#-1+1-1-1+0+1-1-1-1+0-1+1-1-1+0+1+1-1+1-1+1+0+1-1-1+0+1-1+1+1+0+0+0+1+1+0-1+1";
WOMT_aParteienChecksum[0][1] =
  "038-014-009-015#2ecb78fa59cd6bfefb29e3d0fbe98b88#-1+1-1-1+0+1-1-1-1+0-1+1-1-1+0+1+1-1+1-1+1+0+1-1-1+0+1-1+1+1+0+0+0+1+1+0-1+1";
WOMT_aParteien[0] = new Array();
WOMT_aParteien[0][0] = new Array();
WOMT_aParteien[0][0][0] =
  "Christlich Demokratische Union Deutschlands / Christlich-Soziale Union in Bayern e.V.";
WOMT_aParteien[0][0][1] = "CDU / CSU";
WOMT_aParteienURL[1] = "";
WOMT_aParteiFix[1] = 1;
WOMT_aParteienLogos[1] = new Array();
WOMT_aParteienLogos[1][0] = "images/parteien_logo_7530.png";
WOMT_aParteienLogos[1][1] = "140";
WOMT_aParteienLogos[1][2] = "140";
WOMT_aParteienChecksum[1] = new Array();
WOMT_aParteienChecksum[1][0] =
  "038-025-000-013#6eeaeab289a94d7b7c4c910af7fa4ad0#+1+1+1-1+1+1+1+1-1+1-1+1-1+1+1+1-1-1-1+1+1-1+1+1-1+1-1+1-1+1+1+1-1+1+1+1+1-1";
WOMT_aParteienChecksum[1][1] =
  "038-025-000-013#6eeaeab289a94d7b7c4c910af7fa4ad0#+1+1+1-1+1+1+1+1-1+1-1+1-1+1+1+1-1-1-1+1+1-1+1+1-1+1-1+1-1+1+1+1-1+1+1+1+1-1";
WOMT_aParteien[1] = new Array();
WOMT_aParteien[1][0] = new Array();
WOMT_aParteien[1][0][0] = "Sozialdemokratische Partei Deutschlands";
WOMT_aParteien[1][0][1] = "SPD";
WOMT_aParteienURL[2] = "";
WOMT_aParteiFix[2] = 1;
WOMT_aParteienLogos[2] = new Array();
WOMT_aParteienLogos[2][0] = "images/parteien_logo_7531.png";
WOMT_aParteienLogos[2][1] = "140";
WOMT_aParteienLogos[2][2] = "140";
WOMT_aParteienChecksum[2] = new Array();
WOMT_aParteienChecksum[2][0] =
  "038-018-002-018#0dea282214fe230162137fb02f66f452#-1+1-1+1-1+1-1+1+1+1+1+1-1-1-1+1+1-1+1-1+1+1+0-1+1-1-1-1+0+1-1-1-1+1+1-1-1+1";
WOMT_aParteienChecksum[2][1] =
  "038-018-002-018#0dea282214fe230162137fb02f66f452#-1+1-1+1-1+1-1+1+1+1+1+1-1-1-1+1+1-1+1-1+1+1+0-1+1-1-1-1+0+1-1-1-1+1+1-1-1+1";
WOMT_aParteien[2] = new Array();
WOMT_aParteien[2][0] = new Array();
WOMT_aParteien[2][0][0] = "Alternative für Deutschland";
WOMT_aParteien[2][0][1] = "AfD";
WOMT_aParteienURL[3] = "";
WOMT_aParteiFix[3] = 1;
WOMT_aParteienLogos[3] = new Array();
WOMT_aParteienLogos[3][0] = "images/parteien_logo_7532.png";
WOMT_aParteienLogos[3][1] = "140";
WOMT_aParteienLogos[3][2] = "140";
WOMT_aParteienChecksum[3] = new Array();
WOMT_aParteienChecksum[3][0] =
  "038-017-009-012#e5f956a65ba42ebb1c719788b80e3d58#-1+1+1+0-1+1+0-1+0-1-1+1+1+0+0+0+1+0+1+1+1+1+1+1-1-1+1-1-1+1-1+1+0+1+1-1-1+0";
WOMT_aParteienChecksum[3][1] =
  "038-017-009-012#e5f956a65ba42ebb1c719788b80e3d58#-1+1+1+0-1+1+0-1+0-1-1+1+1+0+0+0+1+0+1+1+1+1+1+1-1-1+1-1-1+1-1+1+0+1+1-1-1+0";
WOMT_aParteien[3] = new Array();
WOMT_aParteien[3][0] = new Array();
WOMT_aParteien[3][0][0] = "Freie Demokratische Partei";
WOMT_aParteien[3][0][1] = "FDP";
WOMT_aParteienURL[4] = "";
WOMT_aParteiFix[4] = 1;
WOMT_aParteienLogos[4] = new Array();
WOMT_aParteienLogos[4][0] = "images/parteien_logo_7537.png";
WOMT_aParteienLogos[4][1] = "140";
WOMT_aParteienLogos[4][2] = "140";
WOMT_aParteienChecksum[4] = new Array();
WOMT_aParteienChecksum[4][0] =
  "038-019-002-017#4d123b347cfe68f731acc90c844e0f38#+1-1+1-1+1-1+1+1-1+1-1-1+1+1+1+0-1+1-1+1+1-1-1+1-1+1-1+1-1-1+1+1+0-1-1+1+1-1";
WOMT_aParteienChecksum[4][1] =
  "038-019-002-017#4d123b347cfe68f731acc90c844e0f38#+1-1+1-1+1-1+1+1-1+1-1-1+1+1+1+0-1+1-1+1+1-1-1+1-1+1-1+1-1-1+1+1+0-1-1+1+1-1";
WOMT_aParteien[4] = new Array();
WOMT_aParteien[4][0] = new Array();
WOMT_aParteien[4][0][0] = "DIE LINKE";
WOMT_aParteien[4][0][1] = "DIE LINKE";
WOMT_aParteienURL[5] = "";
WOMT_aParteiFix[5] = 1;
WOMT_aParteienLogos[5] = new Array();
WOMT_aParteienLogos[5][0] = "images/parteien_logo_7539.png";
WOMT_aParteienLogos[5][1] = "140";
WOMT_aParteienLogos[5][2] = "140";
WOMT_aParteienChecksum[5] = new Array();
WOMT_aParteienChecksum[5][0] =
  "038-023-002-013#9ff697dd6495d6bdb71d6f50f76da465#+1-1+1-1+1-1+1+1-1+1-1-1+1+1+1-1-1+1-1+1+1+1+1+1-1+1+1+1-1+0+1+1+1+0-1+1+1-1";
WOMT_aParteienChecksum[5][1] =
  "038-023-002-013#9ff697dd6495d6bdb71d6f50f76da465#+1-1+1-1+1-1+1+1-1+1-1-1+1+1+1-1-1+1-1+1+1+1+1+1-1+1+1+1-1+0+1+1+1+0-1+1+1-1";
WOMT_aParteien[5] = new Array();
WOMT_aParteien[5][0] = new Array();
WOMT_aParteien[5][0][0] = "BÜNDNIS 90/DIE GRÜNEN";
WOMT_aParteien[5][0][1] = "GRÜNE";
WOMT_aParteienURL[6] = "";
WOMT_aParteiFix[6] = 0;
WOMT_aParteienLogos[6] = new Array();
WOMT_aParteienLogos[6][0] = "images/parteien_logo_7543.png";
WOMT_aParteienLogos[6][1] = "140";
WOMT_aParteienLogos[6][2] = "140";
WOMT_aParteienChecksum[6] = new Array();
WOMT_aParteienChecksum[6][0] =
  "038-018-006-014#4ac117864b35147e42ba642dd0464718#-1+1-1-1-1+1-1-1-1+1-1+0+1+1+0+1+1+0+1+1+1+1+1+1-1-1-1-1+0+1+0-1-1+1+1+0+1+1";
WOMT_aParteienChecksum[6][1] =
  "038-018-006-014#4ac117864b35147e42ba642dd0464718#-1+1-1-1-1+1-1-1-1+1-1+0+1+1+0+1+1+0+1+1+1+1+1+1-1-1-1-1+0+1+0-1-1+1+1+0+1+1";
WOMT_aParteien[6] = new Array();
WOMT_aParteien[6][0] = new Array();
WOMT_aParteien[6][0][0] = "FREIE WÄHLER";
WOMT_aParteien[6][0][1] = "FREIE WÄHLER";
WOMT_aParteienURL[7] = "";
WOMT_aParteiFix[7] = 0;
WOMT_aParteienLogos[7] = new Array();
WOMT_aParteienLogos[7][0] = "images/parteien_logo_7545.png";
WOMT_aParteienLogos[7][1] = "140";
WOMT_aParteienLogos[7][2] = "140";
WOMT_aParteienChecksum[7] = new Array();
WOMT_aParteienChecksum[7][0] =
  "038-024-000-014#099a40023fa4a793373d320225ef07fe#+1-1+1-1+1-1+1+1-1+1-1-1+1+1+1-1+1+1-1+1+1+1-1+1-1+1-1+1-1+1+1+1+1-1+1+1+1-1";
WOMT_aParteienChecksum[7][1] =
  "038-024-000-014#099a40023fa4a793373d320225ef07fe#+1-1+1-1+1-1+1+1-1+1-1-1+1+1+1-1+1+1-1+1+1+1-1+1-1+1-1+1-1+1+1+1+1-1+1+1+1-1";
WOMT_aParteien[7] = new Array();
WOMT_aParteien[7][0] = new Array();
WOMT_aParteien[7][0][0] =
  "Partei für Arbeit, Rechtsstaat, Tierschutz, Elitenförderung und basisdemokratische Initiative";
WOMT_aParteien[7][0][1] = "Die PARTEI";
WOMT_aParteienURL[8] = "";
WOMT_aParteiFix[8] = 0;
WOMT_aParteienLogos[8] = new Array();
WOMT_aParteienLogos[8][0] = "images/parteien_logo_7547.png";
WOMT_aParteienLogos[8][1] = "140";
WOMT_aParteienLogos[8][2] = "140";
WOMT_aParteienChecksum[8] = new Array();
WOMT_aParteienChecksum[8][0] =
  "038-018-007-013#d1b086af6fcdc9860ffdd07fdd4fb999#+1-1+1-1+1-1+1+1-1+0-1+0+0+1+1-1+0+1-1+1+1+0-1+1-1+0-1+1-1+1+1+1+1+0-1+1+1-1";
WOMT_aParteienChecksum[8][1] =
  "038-018-007-013#d1b086af6fcdc9860ffdd07fdd4fb999#+1-1+1-1+1-1+1+1-1+0-1+0+0+1+1-1+0+1-1+1+1+0-1+1-1+0-1+1-1+1+1+1+1+0-1+1+1-1";
WOMT_aParteien[8] = new Array();
WOMT_aParteien[8][0] = new Array();
WOMT_aParteien[8][0][0] = "PARTEI MENSCH UMWELT TIERSCHUTZ";
WOMT_aParteien[8][0][1] = "Tierschutzpartei";
WOMT_aParteienURL[9] = "";
WOMT_aParteiFix[9] = 0;
WOMT_aParteienLogos[9] = new Array();
WOMT_aParteienLogos[9][0] = "images/parteien_logo_7549.png";
WOMT_aParteienLogos[9][1] = "140";
WOMT_aParteienLogos[9][2] = "140";
WOMT_aParteienChecksum[9] = new Array();
WOMT_aParteienChecksum[9][0] =
  "038-017-002-019#b353ff24f2ef4a037e0410f32f345388#-1+1-1+1+0-1-1+1+1+1+1-1+1-1-1+1-1-1+1+1-1+1-1-1+1-1-1-1-1-1+1-1-1+0+1+1+1+1";
WOMT_aParteienChecksum[9][1] =
  "038-017-002-019#b353ff24f2ef4a037e0410f32f345388#-1+1-1+1+0-1-1+1+1+1+1-1+1-1-1+1-1-1+1+1-1+1-1-1+1-1-1-1-1-1+1-1-1+0+1+1+1+1";
WOMT_aParteien[9] = new Array();
WOMT_aParteien[9][0] = new Array();
WOMT_aParteien[9][0][0] = "Nationaldemokratische Partei Deutschlands";
WOMT_aParteien[9][0][1] = "NPD";
WOMT_aParteienURL[10] = "";
WOMT_aParteiFix[10] = 0;
WOMT_aParteienLogos[10] = new Array();
WOMT_aParteienLogos[10][0] = "images/parteien_logo_7551.png";
WOMT_aParteienLogos[10][1] = "140";
WOMT_aParteienLogos[10][2] = "140";
WOMT_aParteienChecksum[10] = new Array();
WOMT_aParteienChecksum[10][0] =
  "038-023-002-013#b6accb525f390b07a42e89602084c032#-1-1+1-1+1-1+1+1-1+1-1+1+1+1+0-1+1+0+1+1+1+1-1+1-1-1-1+1-1+1+1+1+1+1-1+1+1+1";
WOMT_aParteienChecksum[10][1] =
  "038-023-002-013#b6accb525f390b07a42e89602084c032#-1-1+1-1+1-1+1+1-1+1-1+1+1+1+0-1+1+0+1+1+1+1-1+1-1-1-1+1-1+1+1+1+1+1-1+1+1+1";
WOMT_aParteien[10] = new Array();
WOMT_aParteien[10][0] = new Array();
WOMT_aParteien[10][0][0] = "Piratenpartei Deutschland";
WOMT_aParteien[10][0][1] = "PIRATEN";
WOMT_aParteienURL[11] = "";
WOMT_aParteiFix[11] = 0;
WOMT_aParteienLogos[11] = new Array();
WOMT_aParteienLogos[11][0] = "images/parteien_logo_7553.png";
WOMT_aParteienLogos[11][1] = "140";
WOMT_aParteienLogos[11][2] = "140";
WOMT_aParteienChecksum[11] = new Array();
WOMT_aParteienChecksum[11][0] =
  "038-019-001-018#452d5c4bc220a333af029335f7d8cf56#+1-1+1-1+1-1+1+1-1+1-1-1+1+1-1-1-1+1-1-1+1+1+1+1-1-1-1+1-1-1+1+1+1-1+0+1+1-1";
WOMT_aParteienChecksum[11][1] =
  "038-019-001-018#452d5c4bc220a333af029335f7d8cf56#+1-1+1-1+1-1+1+1-1+1-1-1+1+1-1-1-1+1-1-1+1+1+1+1-1-1-1+1-1-1+1+1+1-1+0+1+1-1";
WOMT_aParteien[11] = new Array();
WOMT_aParteien[11][0] = new Array();
WOMT_aParteien[11][0][0] = "Ökologisch-Demokratische Partei";
WOMT_aParteien[11][0][1] = "ÖDP";
WOMT_aParteienURL[12] = "";
WOMT_aParteiFix[12] = 0;
WOMT_aParteienLogos[12] = new Array();
WOMT_aParteienLogos[12][0] = "images/parteien_logo_7555.png";
WOMT_aParteienLogos[12][1] = "140";
WOMT_aParteienLogos[12][2] = "140";
WOMT_aParteienChecksum[12] = new Array();
WOMT_aParteienChecksum[12][0] =
  "038-023-000-015#d0d3f3c8ae409897d95df3b8d9d3b0a3#+1-1+1-1+1-1+1+1-1+1-1-1+1+1+1-1+1+1-1+1+1+1-1+1-1-1-1+1-1+1+1+1+1+1-1+1+1-1";
WOMT_aParteienChecksum[12][1] =
  "038-023-000-015#d0d3f3c8ae409897d95df3b8d9d3b0a3#+1-1+1-1+1-1+1+1-1+1-1-1+1+1+1-1+1+1-1+1+1+1-1+1-1-1-1+1-1+1+1+1+1+1-1+1+1-1";
WOMT_aParteien[12] = new Array();
WOMT_aParteien[12][0] = new Array();
WOMT_aParteien[12][0][0] =
  "V-Partei³ – Partei für Veränderung, Vegetarier und Veganer";
WOMT_aParteien[12][0][1] = "V-Partei³";
WOMT_aParteienURL[13] = "";
WOMT_aParteiFix[13] = 0;
WOMT_aParteienLogos[13] = new Array();
WOMT_aParteienLogos[13][0] = "images/parteien_logo_7713.png";
WOMT_aParteienLogos[13][1] = "140";
WOMT_aParteienLogos[13][2] = "140";
WOMT_aParteienChecksum[13] = new Array();
WOMT_aParteienChecksum[13][0] =
  "038-022-003-013#bdd56f300cedb4dfa1ce2d1aaba60634#+1-1+1-1+1-1+1+1-1+1-1-1+1+1+1+0+1+1-1+1+1+1-1+1-1+1-1+1-1-1+1+1+1+0-1+1+1+0";
WOMT_aParteienChecksum[13][1] =
  "038-022-003-013#bdd56f300cedb4dfa1ce2d1aaba60634#+1-1+1-1+1-1+1+1-1+1-1-1+1+1+1+0+1+1-1+1+1+1-1+1-1+1-1+1-1-1+1+1+1+0-1+1+1+0";
WOMT_aParteien[13] = new Array();
WOMT_aParteien[13][0] = new Array();
WOMT_aParteien[13][0][0] = "DEMOKRATIE IN BEWEGUNG";
WOMT_aParteien[13][0][1] = "DiB";
WOMT_aParteienURL[14] = "";
WOMT_aParteiFix[14] = 0;
WOMT_aParteienLogos[14] = new Array();
WOMT_aParteienLogos[14][0] = "images/parteien_logo_7557.png";
WOMT_aParteienLogos[14][1] = "140";
WOMT_aParteienLogos[14][2] = "140";
WOMT_aParteienChecksum[14] = new Array();
WOMT_aParteienChecksum[14][0] =
  "038-015-004-019#039b47bcf34165f24407503ceddc8bd2#-1+1-1+0-1+1+1+0+1+1+1-1-1-1-1+0+1-1+1-1+0+1+1-1-1-1-1-1-1+1-1-1-1+1+1-1+1+1";
WOMT_aParteienChecksum[14][1] =
  "038-015-004-019#039b47bcf34165f24407503ceddc8bd2#-1+1-1+0-1+1+1+0+1+1+1-1-1-1-1+0+1-1+1-1+0+1+1-1-1-1-1-1-1+1-1-1-1+1+1-1+1+1";
WOMT_aParteien[14] = new Array();
WOMT_aParteien[14][0] = new Array();
WOMT_aParteien[14][0][0] = "Bayernpartei";
WOMT_aParteien[14][0][1] = "BP";
WOMT_aParteienURL[15] = "";
WOMT_aParteiFix[15] = 0;
WOMT_aParteienLogos[15] = new Array();
WOMT_aParteienLogos[15][0] = "images/parteien_logo_9497.png";
WOMT_aParteienLogos[15][1] = "140";
WOMT_aParteienLogos[15][2] = "140";
WOMT_aParteienChecksum[15] = new Array();
WOMT_aParteienChecksum[15][0] =
  "038-017-011-010#3e183557417b178a0ae8fed380f8dd0d#+0-1+1-1+1+0+1+1-1+0+0-1+1+1+0+0+1-1+0+1+1+0-1+1-1+0-1+1+0-1+1+1-1+1+0+1+1+1";
WOMT_aParteienChecksum[15][1] =
  "038-017-011-010#3e183557417b178a0ae8fed380f8dd0d#+0-1+1-1+1+0+1+1-1+0+0-1+1+1+0+0+1-1+0+1+1+0-1+1-1+0-1+1+0-1+1+1-1+1+0+1+1+1";
WOMT_aParteien[15] = new Array();
WOMT_aParteien[15][0] = new Array();
WOMT_aParteien[15][0][0] = "Allianz für Menschenrechte, Tier- und Naturschutz";
WOMT_aParteien[15][0][1] = "Tierschutzallianz";
WOMT_aParteienURL[16] = "";
WOMT_aParteiFix[16] = 0;
WOMT_aParteienLogos[16] = new Array();
WOMT_aParteienLogos[16][0] = "images/parteien_logo_7559.png";
WOMT_aParteienLogos[16][1] = "140";
WOMT_aParteienLogos[16][2] = "140";
WOMT_aParteienChecksum[16] = new Array();
WOMT_aParteienChecksum[16][0] =
  "038-013-009-016#c3f003abb74d5c04019aa41e7a4216b9#+1-1+1-1+1-1+1+1-1+1-1-1-1+1+1+0-1+0-1+0+1-1-1+0+0+0-1+1-1+0+1+0-1+0-1+1+1-1";
WOMT_aParteienChecksum[16][1] =
  "038-013-009-016#c3f003abb74d5c04019aa41e7a4216b9#+1-1+1-1+1-1+1+1-1+1-1-1-1+1+1+0-1+0-1+0+1-1-1+0+0+0-1+1-1+0+1+0-1+0-1+1+1-1";
WOMT_aParteien[16] = new Array();
WOMT_aParteien[16][0] = new Array();
WOMT_aParteien[16][0][0] = "Marxistisch-Leninistische Partei Deutschlands";
WOMT_aParteien[16][0][1] = "MLPD";
WOMT_aParteienURL[17] = "";
WOMT_aParteiFix[17] = 0;
WOMT_aParteienLogos[17] = new Array();
WOMT_aParteienLogos[17][0] = "images/parteien_logo_7561.png";
WOMT_aParteienLogos[17][1] = "140";
WOMT_aParteienLogos[17][2] = "140";
WOMT_aParteienChecksum[17] = new Array();
WOMT_aParteienChecksum[17][0] =
  "038-000-038-000#e6c3cdc31f54e09269275917d76cd471#+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0";
WOMT_aParteienChecksum[17][1] =
  "038-000-038-000#e6c3cdc31f54e09269275917d76cd471#+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0";
WOMT_aParteien[17] = new Array();
WOMT_aParteien[17][0] = new Array();
WOMT_aParteien[17][0][0] = "Partei für Gesundheitsforschung";
WOMT_aParteien[17][0][1] = "Gesundheitsforschung";
WOMT_aParteienURL[18] = "";
WOMT_aParteiFix[18] = 0;
WOMT_aParteienLogos[18] = new Array();
WOMT_aParteienLogos[18][0] = "images/parteien_logo_7563.png";
WOMT_aParteienLogos[18][1] = "140";
WOMT_aParteienLogos[18][2] = "140";
WOMT_aParteienChecksum[18] = new Array();
WOMT_aParteienChecksum[18][0] =
  "038-017-009-012#b883237988b1ae5621293ea35f91d739#+1-1+0+1+1-1+0+1-1+1+1-1-1-1+1+1+0+0+1+1+0+0-1+1+0-1-1+1-1+1+1+0-1-1+1+1+0+1";
WOMT_aParteienChecksum[18][1] =
  "038-017-009-012#b883237988b1ae5621293ea35f91d739#+1-1+0+1+1-1+0+1-1+1+1-1-1-1+1+1+0+0+1+1+0+0-1+1+0-1-1+1-1+1+1+0-1-1+1+1+0+1";
WOMT_aParteien[18] = new Array();
WOMT_aParteien[18][0] = new Array();
WOMT_aParteien[18][0][0] =
  "Menschliche Welt - für das Wohl und Glücklichsein aller";
WOMT_aParteien[18][0][1] = "MENSCHLICHE WELT";
WOMT_aParteienURL[19] = "";
WOMT_aParteiFix[19] = 0;
WOMT_aParteienLogos[19] = new Array();
WOMT_aParteienLogos[19][0] = "images/parteien_logo_7565.png";
WOMT_aParteienLogos[19][1] = "140";
WOMT_aParteienLogos[19][2] = "140";
WOMT_aParteienChecksum[19] = new Array();
WOMT_aParteienChecksum[19][0] =
  "038-019-002-017#df781796838a4b4a050b24756a2cc2f2#+1-1+1-1+1-1+1+1-1+1-1-1+1+1+1+1+1+0-1+1+1-1-1+1+1-1-1+1-1-1+1+0-1-1-1+1+1-1";
WOMT_aParteienChecksum[19][1] =
  "038-019-002-017#df781796838a4b4a050b24756a2cc2f2#+1-1+1-1+1-1+1+1-1+1-1-1+1+1+1+1+1+0-1+1+1-1-1+1+1-1-1+1-1-1+1+0-1-1-1+1+1-1";
WOMT_aParteien[19] = new Array();
WOMT_aParteien[19][0] = new Array();
WOMT_aParteien[19][0][0] = "Deutsche Kommunistische Partei";
WOMT_aParteien[19][0][1] = "DKP";
WOMT_aParteienURL[20] = "";
WOMT_aParteiFix[20] = 0;
WOMT_aParteienLogos[20] = new Array();
WOMT_aParteienLogos[20][0] = "images/parteien_logo_7567.png";
WOMT_aParteienLogos[20][1] = "140";
WOMT_aParteienLogos[20][2] = "140";
WOMT_aParteienChecksum[20] = new Array();
WOMT_aParteienChecksum[20][0] =
  "038-015-008-015#99f5421b8e631519b70001e9acf1b505#-1+0-1+0+1+0+0+1-1+0-1-1+1-1-1+0+1-1+1+1+0+1-1+1-1-1-1+1+0-1+1-1-1+1+1+1+1+1";
WOMT_aParteienChecksum[20][1] =
  "038-015-008-015#99f5421b8e631519b70001e9acf1b505#-1+0-1+0+1+0+0+1-1+0-1-1+1-1-1+0+1-1+1+1+0+1-1+1-1-1-1+1+0-1+1-1-1+1+1+1+1+1";
WOMT_aParteien[20] = new Array();
WOMT_aParteien[20][0] = new Array();
WOMT_aParteien[20][0][0] = "Die Grauen – Für alle Generationen";
WOMT_aParteien[20][0][1] = "Die Grauen";
WOMT_aParteienURL[21] = "";
WOMT_aParteiFix[21] = 0;
WOMT_aParteienLogos[21] = new Array();
WOMT_aParteienLogos[21][0] = "images/parteien_logo_7571.png";
WOMT_aParteienLogos[21][1] = "140";
WOMT_aParteienLogos[21][2] = "140";
WOMT_aParteienChecksum[21] = new Array();
WOMT_aParteienChecksum[21][0] =
  "038-016-001-021#cd7fdf8642e24ed4723e91ad05e2b0bc#-1-1-1+1+1-1-1+0-1+1+1+1-1-1-1+1+1+1+1-1-1-1+1-1+1-1-1+1-1+1-1+1-1-1-1+1-1+1";
WOMT_aParteienChecksum[21][1] =
  "038-016-001-021#cd7fdf8642e24ed4723e91ad05e2b0bc#-1-1-1+1+1-1-1+0-1+1+1+1-1-1-1+1+1+1+1-1-1-1+1-1+1-1-1+1-1+1-1+1-1-1-1+1-1+1";
WOMT_aParteien[21] = new Array();
WOMT_aParteien[21][0] = new Array();
WOMT_aParteien[21][0][0] = "Bürgerrechtsbewegung Solidarität";
WOMT_aParteien[21][0][1] = "BüSo";
WOMT_aParteienURL[22] = "";
WOMT_aParteiFix[22] = 0;
WOMT_aParteienLogos[22] = new Array();
WOMT_aParteienLogos[22][0] = "images/parteien_logo_7573.png";
WOMT_aParteienLogos[22][1] = "140";
WOMT_aParteienLogos[22][2] = "140";
WOMT_aParteienChecksum[22] = new Array();
WOMT_aParteienChecksum[22][0] =
  "038-014-011-013#df6e8f996e9ac0b7206235894a7e253e#+0-1+1-1+0+1+1+0-1+0-1+1+1+1+0+0+1-1+1+1+1+0-1+1-1-1-1+0-1+0-1+0+1+1-1+0+1-1";
WOMT_aParteienChecksum[22][1] =
  "038-014-011-013#df6e8f996e9ac0b7206235894a7e253e#+0-1+1-1+0+1+1+0-1+0-1+1+1+1+0+0+1-1+1+1+1+0-1+1-1-1-1+0-1+0-1+0+1+1-1+0+1-1";
WOMT_aParteien[22] = new Array();
WOMT_aParteien[22][0] = new Array();
WOMT_aParteien[22][0][0] = "Partei der Humanisten";
WOMT_aParteien[22][0][1] = "Die Humanisten";
WOMT_aParteienURL[23] = "";
WOMT_aParteiFix[23] = 0;
WOMT_aParteienLogos[23] = new Array();
WOMT_aParteienLogos[23][0] = "images/parteien_logo_7576.png";
WOMT_aParteienLogos[23][1] = "140";
WOMT_aParteienLogos[23][2] = "140";
WOMT_aParteienChecksum[23] = new Array();
WOMT_aParteienChecksum[23][0] =
  "038-019-001-018#3c4ddbddc83655a960f423b2d5bd52d2#+1-1+1-1+1-1+1+1-1+1-1-1+1+1+1-1-1+1-1+1+1+1-1+1-1+1-1+1-1-1+1+1-1-1-1+1+0-1";
WOMT_aParteienChecksum[23][1] =
  "038-019-001-018#3c4ddbddc83655a960f423b2d5bd52d2#+1-1+1-1+1-1+1+1-1+1-1-1+1+1+1-1-1+1-1+1+1+1-1+1-1+1-1+1-1-1+1+1-1-1-1+1+0-1";
WOMT_aParteien[23] = new Array();
WOMT_aParteien[23][0] = new Array();
WOMT_aParteien[23][0][0] = "Die Urbane. Eine HipHop Partei";
WOMT_aParteien[23][0][1] = "du.";
WOMT_aParteienURL[24] = "";
WOMT_aParteiFix[24] = 0;
WOMT_aParteienLogos[24] = new Array();
WOMT_aParteienLogos[24][0] = "images/parteien_logo_7579.png";
WOMT_aParteienLogos[24][1] = "140";
WOMT_aParteienLogos[24][2] = "140";
WOMT_aParteienChecksum[24] = new Array();
WOMT_aParteienChecksum[24][0] =
  "038-018-001-019#e8968c1696c39a04ef211aab17e68eab#+1-1+1-1+1-1+1+1-1+1-1-1+1+1+0+1+1+1-1+1+1-1-1+1-1-1-1+1-1-1+1+1-1-1-1+1-1-1";
WOMT_aParteienChecksum[24][1] =
  "038-018-001-019#e8968c1696c39a04ef211aab17e68eab#+1-1+1-1+1-1+1+1-1+1-1-1+1+1+0+1+1+1-1+1+1-1-1+1-1-1-1+1-1-1+1+1-1-1-1+1-1-1";
WOMT_aParteien[24] = new Array();
WOMT_aParteien[24][0] = new Array();
WOMT_aParteien[24][0][0] =
  "Sozialistische Gleichheitspartei, Vierte Internationale";
WOMT_aParteien[24][0][1] = "SGP";
WOMT_aParteienURL[25] = "";
WOMT_aParteiFix[25] = 0;
WOMT_aParteienLogos[25] = new Array();
WOMT_aParteienLogos[25][0] = "images/parteien_logo_7585.png";
WOMT_aParteienLogos[25][1] = "140";
WOMT_aParteienLogos[25][2] = "140";
WOMT_aParteienChecksum[25] = new Array();
WOMT_aParteienChecksum[25][0] =
  "038-015-012-011#077bf55026c5dec2b0dcbe348fa30a2b#+0-1-1+0+1-1+0+1+0+1+1-1+0+0-1+1+1+0+1-1+0+1-1+0+0-1-1+1-1+0+1+0-1+1+1+1+1+1";
WOMT_aParteienChecksum[25][1] =
  "038-015-012-011#077bf55026c5dec2b0dcbe348fa30a2b#+0-1-1+0+1-1+0+1+0+1+1-1+0+0-1+1+1+0+1-1+0+1-1+0+0-1-1+1-1+0+1+0-1+1+1+1+1+1";
WOMT_aParteien[25] = new Array();
WOMT_aParteien[25][0] = new Array();
WOMT_aParteien[25][0][0] = "Basisdemokratische Partei Deutschland";
WOMT_aParteien[25][0][1] = "dieBasis";
WOMT_aParteienURL[26] = "";
WOMT_aParteiFix[26] = 0;
WOMT_aParteienLogos[26] = new Array();
WOMT_aParteienLogos[26][0] = "images/parteien_logo_7588.png";
WOMT_aParteienLogos[26][1] = "140";
WOMT_aParteienLogos[26][2] = "140";
WOMT_aParteienChecksum[26] = new Array();
WOMT_aParteienChecksum[26][0] =
  "038-020-001-017#d57d88479f7eb5ef01a142aaa0f3eda6#+1+1-1+1-1+1-1-1-1+1+1+1-1+1-1+1+1+0+1-1+1+1+1-1-1-1-1+1-1+1-1-1-1+1+1+1-1+1";
WOMT_aParteienChecksum[26][1] =
  "038-020-001-017#d57d88479f7eb5ef01a142aaa0f3eda6#+1+1-1+1-1+1-1-1-1+1+1+1-1+1-1+1+1+0+1-1+1+1+1-1-1-1-1+1-1+1-1-1-1+1+1+1-1+1";
WOMT_aParteien[26] = new Array();
WOMT_aParteien[26][0] = new Array();
WOMT_aParteien[26][0][0] = "Bündnis C – Christen für Deutschland";
WOMT_aParteien[26][0][1] = "Bündnis C";
WOMT_aParteienURL[27] = "";
WOMT_aParteiFix[27] = 0;
WOMT_aParteienLogos[27] = new Array();
WOMT_aParteienLogos[27][0] = "images/parteien_logo_8547.png";
WOMT_aParteienLogos[27][1] = "140";
WOMT_aParteienLogos[27][2] = "140";
WOMT_aParteienChecksum[27] = new Array();
WOMT_aParteienChecksum[27][0] =
  "038-017-007-014#aec64438faadcdf57a7862e8e092d882#+0+0-1-1-1+1+1+1-1+1+0+1-1-1-1+1+1+0+1+0-1+0-1+1-1-1-1+1+1-1+1+0-1+1+1+1+1+1";
WOMT_aParteienChecksum[27][1] =
  "038-017-007-014#aec64438faadcdf57a7862e8e092d882#+0+0-1-1-1+1+1+1-1+1+0+1-1-1-1+1+1+0+1+0-1+0-1+1-1-1-1+1+1-1+1+0-1+1+1+1+1+1";
WOMT_aParteien[27] = new Array();
WOMT_aParteien[27][0] = new Array();
WOMT_aParteien[27][0][0] = "Bürgerbewegung für Fortschritt und Wandel";
WOMT_aParteien[27][0][1] = "BÜRGERBEWEGUNG";
WOMT_aParteienURL[28] = "";
WOMT_aParteiFix[28] = 0;
WOMT_aParteienLogos[28] = new Array();
WOMT_aParteienLogos[28][0] = "images/parteien_logo_7594.png";
WOMT_aParteienLogos[28][1] = "140";
WOMT_aParteienLogos[28][2] = "140";
WOMT_aParteienChecksum[28] = new Array();
WOMT_aParteienChecksum[28][0] =
  "038-019-004-015#f8d37b6a360cefdc48e149c05cad6444#+0+1-1+1+1-1-1+1+1+1+1+0+1-1-1+1+1-1+1+1-1+1-1-1+1-1+0+1-1-1+1-1-1+0+1+1-1+1";
WOMT_aParteienChecksum[28][1] =
  "038-019-004-015#f8d37b6a360cefdc48e149c05cad6444#+0+1-1+1+1-1-1+1+1+1+1+0+1-1-1+1+1-1+1+1-1+1-1-1+1-1+0+1-1-1+1-1-1+0+1+1-1+1";
WOMT_aParteien[28] = new Array();
WOMT_aParteien[28][0] = new Array();
WOMT_aParteien[28][0][0] = "DER DRITTE WEG";
WOMT_aParteien[28][0][1] = "III. Weg";
WOMT_aParteienURL[29] = "";
WOMT_aParteiFix[29] = 0;
WOMT_aParteienLogos[29] = new Array();
WOMT_aParteienLogos[29][0] = "images/parteien_logo_8632.png";
WOMT_aParteienLogos[29][1] = "140";
WOMT_aParteienLogos[29][2] = "140";
WOMT_aParteienChecksum[29] = new Array();
WOMT_aParteienChecksum[29][0] =
  "038-012-000-026#7da50706d39bb0e27fe6a053ff67dfb8#-1-1-1+1-1-1-1+1-1+1-1+1-1-1-1-1+1-1+1-1-1-1-1+1-1-1+1-1-1+1-1-1-1-1+1+1-1+1";
WOMT_aParteienChecksum[29][1] =
  "038-012-000-026#7da50706d39bb0e27fe6a053ff67dfb8#-1-1-1+1-1-1-1+1-1+1-1+1-1-1-1-1+1-1+1-1-1-1-1+1-1-1+1-1-1+1-1-1-1-1+1+1-1+1";
WOMT_aParteien[29] = new Array();
WOMT_aParteien[29][0] = new Array();
WOMT_aParteien[29][0][0] = "diePinken/BÜNDNIS21";
WOMT_aParteien[29][0][1] = "BÜNDNIS21";
WOMT_aParteienURL[30] = "";
WOMT_aParteiFix[30] = 0;
WOMT_aParteienLogos[30] = new Array();
WOMT_aParteienLogos[30][0] = "images/parteien_logo_7604.png";
WOMT_aParteienLogos[30][1] = "140";
WOMT_aParteienLogos[30][2] = "140";
WOMT_aParteienChecksum[30] = new Array();
WOMT_aParteienChecksum[30][0] =
  "038-032-000-006#8274fa63f3b7c0ab672b651ea3f8bcb1#+1+1+1+1+1+1-1+1-1+1+1+1+1-1+1+1+1+1+1+1+1+1+1+1-1+1+1+1+1+1+1-1+1+1+1+1-1+1";
WOMT_aParteienChecksum[30][1] =
  "038-032-000-006#8274fa63f3b7c0ab672b651ea3f8bcb1#+1+1+1+1+1+1-1+1-1+1+1+1+1-1+1+1+1+1+1+1+1+1+1+1-1+1+1+1+1+1+1-1+1+1+1+1-1+1";
WOMT_aParteien[30] = new Array();
WOMT_aParteien[30][0] = new Array();
WOMT_aParteien[30][0][0] = "Europäische Partei LIEBE";
WOMT_aParteien[30][0][1] = "LIEBE";
WOMT_aParteienURL[31] = "";
WOMT_aParteiFix[31] = 0;
WOMT_aParteienLogos[31] = new Array();
WOMT_aParteienLogos[31][0] = "images/parteien_logo_7610.png";
WOMT_aParteienLogos[31][1] = "140";
WOMT_aParteienLogos[31][2] = "140";
WOMT_aParteienChecksum[31] = new Array();
WOMT_aParteienChecksum[31][0] =
  "038-012-000-026#fd139189065fa97dba9da5f925148791#-1+1-1+1-1+1-1-1-1-1-1-1+1-1-1+1+1-1+1-1+1+1-1-1-1-1-1-1-1-1-1-1-1+1+1-1-1+1";
WOMT_aParteienChecksum[31][1] =
  "038-012-000-026#fd139189065fa97dba9da5f925148791#-1+1-1+1-1+1-1-1-1-1-1-1+1-1-1+1+1-1+1-1+1+1-1-1-1-1-1-1-1-1-1-1-1+1+1-1-1+1";
WOMT_aParteien[31] = new Array();
WOMT_aParteien[31][0] = new Array();
WOMT_aParteien[31][0][0] = "Liberal-Konservative Reformer";
WOMT_aParteien[31][0][1] = "LKR";
WOMT_aParteienURL[32] = "";
WOMT_aParteiFix[32] = 0;
WOMT_aParteienLogos[32] = new Array();
WOMT_aParteienLogos[32][0] = "images/parteien_logo_7617.png";
WOMT_aParteienLogos[32][1] = "140";
WOMT_aParteienLogos[32][2] = "140";
WOMT_aParteienChecksum[32] = new Array();
WOMT_aParteienChecksum[32][0] =
  "038-018-007-013#6bdf96621645eaf143e02cc6ee1a6846#-1+1+0-1+0-1+0+1-1+0-1+1-1+1+1+1+1+1+0+1+1+1-1+1-1+0-1-1-1+1+1+1-1+1+1+0+1-1";
WOMT_aParteienChecksum[32][1] =
  "038-018-007-013#6bdf96621645eaf143e02cc6ee1a6846#-1+1+0-1+0-1+0+1-1+0-1+1-1+1+1+1+1+1+0+1+1+1-1+1-1+0-1-1-1+1+1+1-1+1+1+0+1-1";
WOMT_aParteien[32] = new Array();
WOMT_aParteien[32][0] = new Array();
WOMT_aParteien[32][0][0] = "Partei des Fortschritts";
WOMT_aParteien[32][0][1] = "PdF";
WOMT_aParteienURL[33] = "";
WOMT_aParteiFix[33] = 0;
WOMT_aParteienLogos[33] = new Array();
WOMT_aParteienLogos[33][0] = "images/parteien_logo_10741.png";
WOMT_aParteienLogos[33][1] = "140";
WOMT_aParteienLogos[33][2] = "140";
WOMT_aParteienChecksum[33] = new Array();
WOMT_aParteienChecksum[33][0] =
  "038-008-021-009#1e8b9114b2da9066d6682ee4ef1514c2#+1-1+1+0+0-1+1+1-1+0-1-1+1+0+1+0+0+0+0+0+0+0+0+0-1+0+0+0+0-1+1+0+0+0-1+1+0-1";
WOMT_aParteienChecksum[33][1] =
  "038-008-021-009#1e8b9114b2da9066d6682ee4ef1514c2#+1-1+1+0+0-1+1+1-1+0-1-1+1+0+1+0+0+0+0+0+0+0+0+0-1+0+0+0+0-1+1+0+0+0-1+1+0-1";
WOMT_aParteien[33] = new Array();
WOMT_aParteien[33][0] = new Array();
WOMT_aParteien[33][0][0] =
  "» Partei für Kinder, Jugendliche und Familien « – Lobbyisten für Kinder –";
WOMT_aParteien[33][0][1] = "LfK";
WOMT_aParteienURL[34] = "";
WOMT_aParteiFix[34] = 0;
WOMT_aParteienLogos[34] = new Array();
WOMT_aParteienLogos[34][0] = "images/parteien_logo_7619.png";
WOMT_aParteienLogos[34][1] = "140";
WOMT_aParteienLogos[34][2] = "140";
WOMT_aParteienChecksum[34] = new Array();
WOMT_aParteienChecksum[34][0] =
  "038-021-004-013#119146bd6f3209a191b55aae711c633d#+1+0+1-1+1+0+1+1-1+1-1+1+1+1+0-1+1+1-1-1+1+1+1+1-1-1-1+1-1-1+1+1-1+0-1+1+1+1";
WOMT_aParteienChecksum[34][1] =
  "038-021-004-013#119146bd6f3209a191b55aae711c633d#+1+0+1-1+1+0+1+1-1+1-1+1+1+1+0-1+1+1-1-1+1+1+1+1-1-1-1+1-1-1+1+1-1+0-1+1+1+1";
WOMT_aParteien[34] = new Array();
WOMT_aParteien[34][0] = new Array();
WOMT_aParteien[34][0][0] = "Südschleswigscher Wählerverband";
WOMT_aParteien[34][0][1] = "SSW";
WOMT_aParteienURL[35] = "";
WOMT_aParteiFix[35] = 0;
WOMT_aParteienLogos[35] = new Array();
WOMT_aParteienLogos[35][0] = "images/parteien_logo_7621.png";
WOMT_aParteienLogos[35][1] = "140";
WOMT_aParteienLogos[35][2] = "140";
WOMT_aParteienChecksum[35] = new Array();
WOMT_aParteienChecksum[35][0] =
  "038-018-002-018#b5c10a7201d9da3f27288e606dc89db5#-1-1+0-1-1-1-1+1-1+1-1+1+1+1-1+1+1+1+1+1+1-1-1+1-1-1-1-1-1+1+1+1-1+1+0-1+1+1";
WOMT_aParteienChecksum[35][1] =
  "038-018-002-018#b5c10a7201d9da3f27288e606dc89db5#-1-1+0-1-1-1-1+1-1+1-1+1+1+1-1+1+1+1+1+1+1-1-1+1-1-1-1-1-1+1+1+1-1+1+0-1+1+1";
WOMT_aParteien[35] = new Array();
WOMT_aParteien[35][0] = new Array();
WOMT_aParteien[35][0][0] = "Team Todenhöfer – Die Gerechtigkeitspartei";
WOMT_aParteien[35][0][1] = "Team Todenhöfer";
WOMT_aParteienURL[36] = "";
WOMT_aParteiFix[36] = 0;
WOMT_aParteienLogos[36] = new Array();
WOMT_aParteienLogos[36][0] = "images/parteien_logo_7623.png";
WOMT_aParteienLogos[36][1] = "140";
WOMT_aParteienLogos[36][2] = "140";
WOMT_aParteienChecksum[36] = new Array();
WOMT_aParteienChecksum[36][0] =
  "038-016-012-010#8f1071930f54fe7c2026b5de3b95de0a#-1+0+0+1+1+0+0+1+0+1+1+0+0-1-1+1+1-1+1+1+0+1-1+1-1-1-1+1+0-1+1+0-1+1+1+1+0+0";
WOMT_aParteienChecksum[36][1] =
  "038-016-012-010#8f1071930f54fe7c2026b5de3b95de0a#-1+0+0+1+1+0+0+1+0+1+1+0+0-1-1+1+1-1+1+1+0+1-1+1-1-1-1+1+0-1+1+0-1+1+1+1+0+0";
WOMT_aParteien[36] = new Array();
WOMT_aParteien[36][0] = new Array();
WOMT_aParteien[36][0][0] = "UNABHÄNGIGE für bürgernahe Demokratie";
WOMT_aParteien[36][0][1] = "UNABHÄNGIGE";
WOMT_aParteienURL[37] = "";
WOMT_aParteiFix[37] = 0;
WOMT_aParteienLogos[37] = new Array();
WOMT_aParteienLogos[37][0] = "images/parteien_logo_7625.png";
WOMT_aParteienLogos[37][1] = "140";
WOMT_aParteienLogos[37][2] = "140";
WOMT_aParteienChecksum[37] = new Array();
WOMT_aParteienChecksum[37][0] =
  "038-022-000-016#63644e5fd99639507e2aadeca6b69ae2#+1-1+1-1+1-1+1+1-1+1-1+1+1+1+1-1+1+1-1+1+1-1-1+1-1+1-1-1-1-1+1+1+1-1-1+1+1+1";
WOMT_aParteienChecksum[37][1] =
  "038-022-000-016#63644e5fd99639507e2aadeca6b69ae2#+1-1+1-1+1-1+1+1-1+1-1+1+1+1+1-1+1+1-1+1+1-1-1+1-1+1-1-1-1-1+1+1+1-1-1+1+1+1";
WOMT_aParteien[37] = new Array();
WOMT_aParteien[37][0] = new Array();
WOMT_aParteien[37][0][0] = "Volt Deutschland";
WOMT_aParteien[37][0][1] = "Volt";
WOMT_sCheckSumImport = "64e81ec7ec4b6f27ed8e07b3102f097e";
WOMT_sCheckSumExport = "64e81ec7ec4b6f27ed8e07b3102f097e";
WOMT_sGenerationTime = "03.09.2021 16:54:52";
WOMT_sCheckSumDivText = "c8350d6cf1f812ab3a88c17d032a681a";
WOMT_sCheckThesenText = "eb8de906de2691b094469d788df53731";
WOMT_sCheckPN = "00839cf9154761502d3d8255b2dc7a06";
WOMT_aThemen[0] = new Array();
WOMT_aThemen[0][0] = "Dummy Thema";

// WOMT_aParteien[index][0][0] = Partei Name
// WOMT_aParteien[index][0][1] = Partei Kürzel
var str1 = JSON.stringify(WOMT_aParteien);
console.log(str1);
// WOMT_aThesen[i][0][0] = These Thema
// WOMT_aThesen[i][0][1] = These These
var str2 = JSON.stringify(WOMT_aThesen);
console.log(str2);
// WOMT_aThesenParteien[j][i] in {-1, 0, 1} ist Meinung der Partei i zu These j
var str3 = JSON.stringify(WOMT_aThesenParteien);
console.log(str3);

// copy jsons from console and and clean up \&quot;
