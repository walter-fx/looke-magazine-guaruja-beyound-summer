	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"FLIPBUILDER",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : 'http://www.flipbuilder.com/',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	
	;bookConfig.BookTemplateName="metro";bookConfig.loadingCaption="Loading";bookConfig.loadingCaptionColor="#DDDDDD";bookConfig.loadingBackground="#E8E8E8";bookConfig.appLogoIcon="files/mobile-ext/appLogoIcon.png";bookConfig.appLogoOpenWindow="Blank";bookConfig.logoHeight="40";bookConfig.logoPadding="0";bookConfig.logoTop="0";bookConfig.toolbarColor="#000000";bookConfig.iconColor="#ECF5FB";bookConfig.pageNumColor="#333333";bookConfig.iconFontColor="#FFFFFF";bookConfig.toolbarAlwaysShow="No";bookConfig.InstructionsButtonVisible="Show";bookConfig.QRCode="Hide";bookConfig.HomeButtonVisible="Hide";bookConfig.HomeURL="%first page%";bookConfig.enablePageBack="Show";bookConfig.ShareButtonVisible="Show";bookConfig.EmailButtonVisible="Show";bookConfig.btnShareWithEmailBody="{link}";bookConfig.ThumbnailsButtonVisible="Show";bookConfig.thumbnailColor="#333333";bookConfig.thumbnailAlpha="70";bookConfig.BookMarkButtonVisible="Hide";bookConfig.TableOfContentButtonVisible="Show";bookConfig.bookmarkBackground="#000000";bookConfig.bookmarkFontColor="#cccccc";bookConfig.SearchButtonVisible="Hide";bookConfig.leastSearchChar="3";bookConfig.searchFontColor="#FFFFFF";bookConfig.searchHightlightColor="#ffff00";bookConfig.SelectTextButtonVisible="Show";bookConfig.PrintButtonVisible="Show";bookConfig.BackgroundSoundButtonVisible="Show";bookConfig.FlipSound="Yes";bookConfig.BackgroundSoundLoop="-1";bookConfig.AutoPlayButtonVisible="Show";bookConfig.autoPlayAutoStart="No";bookConfig.autoPlayDuration="9";bookConfig.autoPlayLoopCount="1";bookConfig.ZoomButtonVisible="Show";bookConfig.minZoomWidth="700";bookConfig.minZoomHeight="518";bookConfig.mouseWheelFlip="Yes";bookConfig.DownloadButtonVisible="Hide";bookConfig.PhoneButtonVisible="Hide";bookConfig.AnnotationButtonVisible="Hide";bookConfig.FullscreenButtonVisible="Show";bookConfig.bgBeginColor="#E2E2E2";bookConfig.bgEndColor="#E2E2E2";bookConfig.bgMRotation="90";bookConfig.backGroundImgURL="files/mobile-ext/backGroundImgURL.jpg";bookConfig.backgroundPosition="stretch";bookConfig.backgroundOpacity="100";bookConfig.LeftShadowWidth="90";bookConfig.LeftShadowAlpha="0.6";bookConfig.RightShadowWidth="55";bookConfig.RightShadowAlpha="0.6";bookConfig.ShowTopLeftShadow="Yes";bookConfig.HardPageEnable="No";bookConfig.hardCoverBorderWidth="8";bookConfig.borderColor="#572F0D";bookConfig.outerCoverBorder="Yes";bookConfig.cornerRound="8";bookConfig.leftMarginOnMobile="0";bookConfig.topMarginOnMobile="0";bookConfig.rightMarginOnMobile="0";bookConfig.bottomMarginOnMobile="0";bookConfig.pageBackgroundColor="#E8E8E8";bookConfig.flipshortcutbutton="Show";bookConfig.BindingType="side";bookConfig.RightToLeft="No";bookConfig.flippingTime="0.6";bookConfig.retainBookCenter="Yes";bookConfig.FlipStyle="Flip";bookConfig.autoDoublePage="Yes";bookConfig.thicknessWidthType="Thinner";bookConfig.thicknessColor="#ffffff";bookConfig.topMargin="10";bookConfig.bottomMargin="10";bookConfig.leftMargin="10";bookConfig.rightMargin="10";bookConfig.maxWidthToSmallMode="400";bookConfig.maxHeightToSmallMode="300";bookConfig.LinkDownColor="#800080";bookConfig.LinkAlpha="0.2";bookConfig.OpenWindow="Blank";bookConfig.showLinkHint="No";bookConfig.MidBgColor="#273145";bookConfig.searchFontColor="#FFFDDD";bookConfig.totalPageCount=28;bookConfig.largePageWidth=1800;bookConfig.largePageHeight=2400;;bookConfig.securityType="1";bookConfig.bookTitle="Looke Magazine - Guarujá Beyound Summer";bookConfig.bookmarkCR="a30f0af51445424188ed56c4d541144e60de27ae";bookConfig.productName="Flip PDF Corporate Edition";bookConfig.homePage="http://www.flipbuilder.com";bookConfig.searchPositionJS="mobile/javascript/text_position[1].js";bookConfig.searchTextJS="mobile/javascript/search_config.js";bookConfig.normalPath="files/mobile/";bookConfig.largePath="files/mobile/";bookConfig.thumbPath="files/thumb/";bookConfig.userListPath="files/extfiles/users.js";bookConfig.UIBaseURL='mobile/';var language = [{ language : "Portuguese",btnFirstPage:"Primeira página",btnNextPage:"Página seguinte",btnLastPage:"Última página",btnPrePage:"Página anterior",btnDownload:"Transferir",btnPrint:"Imprimir",btnSearch:"Buscar",btnClearSearch:"Limpar",frmSearchPrompt:"Clear",btnBookMark:"Índice",btnHelp:"Ajuda",btnHome:"Home",btnFullScreen:"Ativar tela cheia",btnDisableFullScreen:"Desativar tela cheia",btnSoundOn:"Som ligado",btnSoundOff:"Som desligado",btnShareEmail:"Compartilhar",btnSocialShare:"Compartilhar",btnZoomIn:"Ampliar",btnZoomOut:"Reduzir",btnDragToMove:"Mover ao arrastar o mouse",btnAutoFlip:"Virar automaticamente",btnStopAutoFlip:"Parar de virar automaticamente",btnGoToHome:"Voltar ao começo",frmHelpCaption:"Ajuda",frmHelpTip1:"Duplo clique para ampliar ou reduzir",frmHelpTip2:"Arrastar o canto da página para visualizar",frmPrintCaption:"Imprimir",frmPrintBtnCaption:"Imprimir",frmPrintPrintAll:"Imprimir todas as páginas",frmPrintPrintCurrentPage:"Imprimir página atual",frmPrintPrintRange:"Intervalo de páginas",frmPrintExampleCaption:"Ex.: 2,5,8-26",frmPrintPreparePage:"Preparando páginas:",frmPrintPrintFailed:"Erro ao Imprimir:",pnlSearchInputInvalid:"O texto de busca é muito pequeno.",loginCaption:"Iniciar sessão",loginInvalidPassword:"Senha incorreta",loginPasswordLabel:"Senha:",loginBtnLogin:"Ingressar",loginBtnCancel:"Cancelar",btnThumb:"Miniaturas",lblPages:"Páginas:",lblPagesFound:"Páginas:",lblPageIndex:"Página",btnAbout:"Sobre",frnAboutCaption:"Sobre e contato",btnSinglePage:"Página simples",btnDoublePage:"Página dupla",btnSwicthLanguage:"Alterar idioma",tipChangeLanguage:"Selecione um idioma abaixo...",btnMoreOptionsLeft:"Mais opções",btnMoreOptionsRight:"Mais opções",btnFit:"Ajustar à janela",smallModeCaption:"Clique para visualizar em tela cheia",btnAddAnnotation:"Adicionar anotações",btnAnnotation:"Anotações",FlipPageEditor_SaveAndExit:"Salvar e sair",FlipPageEditor_Exit:"Sair",DrawToolWindow_Redo:"Refazer",DrawToolWindow_Undo:"Desfazer",DrawToolWindow_Clear:"Limpar",DrawToolWindow_Brush:"Pincel",DrawToolWindow_Width:"Largura",DrawToolWindow_Alpha:"Alfa",DrawToolWindow_Color:"Cor",DrawToolWindow_Eraser:"Borracha",DrawToolWindow_Rectangular:"Retângulo",DrawToolWindow_Ellipse:"Elipse",TStuff_BorderWidth:"Largura da borda",TStuff_BorderAlph:"Transparência da borda",TStuff_BorderColor:"Cor da borda",DrawToolWindow_TextNote:"Nota de texto",AnnotMark:"Marcador de livro",lastpagebtnHelp:"Última página",firstpagebtnHelp:"Primeira página",homebtnHelp:"Retornar à página inicial",aboubtnHelp:"Sobre",screenbtnHelp:"Abrir este aplicativo no modo de tela cheia",helpbtnHelp:"Mostrar Ajuda",searchbtnHelp:"Busca de páginas",pagesbtnHelp:"Dê uma olhada na miniatura deste livreto",bookmarkbtnHelp:"Abrir marcador",AnnotmarkbtnHelp:"Abrir índice",printbtnHelp:"Imprimir o livreto",soundbtnHelp:"Ligar ou desligar o som",sharebtnHelp:"Enviar por e-mail",socialSharebtnHelp:"Compartilhar",zoominbtnHelp:"Ampliar",downloadbtnHelp:"Transferir este livreto",pagemodlebtnHelp:"Alternar modo de página simples e dupla",languagebtnHelp:"Aternar idioma",annotationbtnHelp:"Adicionar anotação",addbookmarkbtnHelp:"Adicionar marcador",removebookmarkbtnHelp:"Remover marcador",updatebookmarkbtnHelp:"Atualizar marcador",btnShoppingCart:"Carrinho de compra",Help_ShoppingCartbtn:"Carrinho de compra",Help_btnNextPage:"Página seguinte",Help_btnPrePage:"Página anterior",Help_btnAutoFlip:"Virar automaticamente",Help_StopAutoFlip:"Parar de virar automaticamente",btnaddbookmark:"Adicionar",btndeletebookmark:"Apagar",btnupdatebookmark:"Atualizar",frmyourbookmarks:"Seus marcadores",frmitems:"itens",DownloadFullPublication:"Publicação completa",DownloadCurrentPage:"Página atual",DownloadAttachedFiles:"Arquivos anexos",lblLink:"Etiqueta do link para compartilhar",btnCopy:"Botão copiar",infCopyToClipboard:"Your browser does not support clipboard. ",restorePage:"Você gostaria de restaurar a sessão anterior?",tmpl_Backgoundsoundon:"Ativar som de fundo",tmpl_Backgoundsoundoff:"Desativar som de fundo",tmpl_Flipsoundon:"Ativar som ao virar",tmpl_Flipsoundoff:"Desativar som ao virar",Help_PageIndex:"Número de página atual",tmpl_PrintPageRanges:"INTERVALOS DE PÁGINA",tmpl_PrintPreview:"VISUALIZAÇÃO",btnSelection:"Selecionar texto",loginNameLabel:"Nome:",btnGotoPage:"Ir",btnSettings:"Configurações",soundSettingTitle:"Configurar som",closeFlipSound:"Fechar som ao virar",closeBackgroundSound:"Fechar som de fundo",frmShareCaption:"Compartilhar",frmShareLinkLabel:"ligação:",frmShareBtnCopy:"Copiar",frmShareItemsGroupCaption:"Compartilhar na rede social",TAnnoActionPropertyStuff_GotoPage:"Ir para página",btnPageBack:"Anterior",btnPageForward:"Seguinte",SelectTextCopy:"Copiar texto",selectCopyButton:"Copiar",TStuffCart_TypeCart:"Carrinho de compras",TStuffCart_DetailedQuantity:"Quantidade",TStuffCart_DetailedPrice:"Preço",ShappingCart_Close:"Fechar",ShappingCart_CheckOut:"Verificar",ShappingCart_Item:"Item",ShappingCart_Total:"Total",ShappingCart_AddCart:"Adicionar ao carrinho",ShappingCart_InStock:"Em estoque",TStuffCart_DetailedCost:"Custo de frete",TStuffCart_DetailedTime:"Tempo de entrega",TStuffCart_DetailedDay:"dia(s)",ShappingCart_NotStock:"Não o suficiente em estoque",btnCrop:"Cortar",btnDragButton:"Arrastar",btnFlipBook:"Virar livro",btnSlideMode:"Modo deslizante",btnSinglePageMode:"Modo de página simples",btnVertical:"Modo vertical",btnHotizontal:"Modo horizontal",btnClose:"Fechar",btnDoublePage:"Página dupla",btnBookStatus:"Visualizar livro",checkBoxInsert:"Inserir página atual",lblLast:"Esta é a última página.",lblFirst:"Esta é a primeira página.",lblFullscreen:"Clique para visualizar em tela cheia",lblName:"Nome",lblPassword:"Senha",lblLogin:"Ingressar",lblCancel:"Cancelar",lblNoName:"O nome do usuário não pode estar vazio.",lblNoPassword:"A senha não pode estar vazia.",lblNoCorrectLogin:"Digite corretamente o nome de usuário e senha.",btnVideo:"Galeria de vídeos",btnSlideShow:"Apresentação",pnlSearchInputInvalid:"O texto de busca é muito pequeno.",btnDragToMove:"Mover ao arrastar o mouse",btnPositionToMove:"Mover ao posicionar o mouse",lblHelp1:"Arraste o canto da página para visualizar",lblHelp2:"Duplo clique para ampliar ou reduzir",lblCopy:"Copiar",lblAddToPage:"adicionar à página",lblPage:"Página",lblTitle:"Título",lblEdit:"Editar",lblDelete:"Apagar",lblRemoveAll:"Remover tudo",tltCursor:"cursor",tltAddHighlight:"adicionar realce",tltAddTexts:"adicionar textos",tltAddShapes:"adicionar formas",tltAddNotes:"adicionar notas",tltAddImageFile:"adicionar arquivo de imagem",tltAddSignature:"adicionar assinatura",tltAddLine:"adicionar linha",tltAddArrow:"adicionar seta",tltAddRect:"adicionar retângulo",tltAddEllipse:"adicionar círculo",lblDoubleClickToZoomIn:"Duplo clique para ampliar.",frmShareCaption:"Compartilhar",frmShareLabel:"Compartilhar",frmShareInfo:"Você pode facilmente compartilhar esta publicação nas redes sociais. Basta clicar no botão apropriado abaixo.",frminsertLabel:"Inserir para o site",frminsertInfo:"Use o código abaixo para incorporar esta publicação para o seu site.",btnQRCode:"Clique para ler o código QR",btnRotateLeft:"Vire à esquerda",btnRotateRight:"Vire à direita",lblSelectMode:"Select view mode please.",frmDownloadPreview:"Prévia",frmHowToUse:"Dicas de utilização",lblHelpPage1:"Arraste com o seu dedo para virar a página do livro",lblHelpPage2:"Aumente o zoom usando gestos ou clique duas vezes na página",lblHelpPage3:"Clique no ícone para acessar o nosso site",lblHelpPage4:"Adicionar marcadores, usar a função de pesquisa e virar o livro automaticamente",lblHelpPage5:"Alternar visualização horizontal e vertical em dispositivos móveis",TTActionQuiz_PlayAgain:"Você quer jogar de novo?",TTActionQuiz_Ration:"Your ratio is",frmTelephone:"Telephone list",btnDialing:"Dialing",lblSelectMessage:"Please copy the the text content in the text box",btnSelectText:"Select Text",btnNote:"Annotation",btnPhoneNumber:"Telephone",frmBookMark:"marcador de livros",btnFullscreen:"Ecrã Inteiro",btnExitFullscreen:"Sair da tela inteira",btnMore:"Mais",frmPrintall:"Imprimir todas as páginas",frmPrintcurrent:"Imprimir página atual",frmPrintRange:"Intervalo de impressão",frmPrintexample:"Exemplo: 2,3,5-10",frmPrintbtn:"impressão",frmaboutcaption:"contato",frmaboutcontactinformation:"Informações para contato",frmaboutADDRESS:"ENDEREÇO",frmaboutEMAIL:"EMAIL",frmaboutWEBSITE:"WEBSITE",frmaboutMOBILE:"MOBILE",frmaboutAUTHOR:"AUTOR",frmaboutDESCRIPTION:"DESCRIÇÃO",frmSearch:"Pesquisa",frmToc:"Tabela de Conteúdo",btnTableOfContent:"Mostrar tabela de conteúdo",lblDescription:"Título",frmLinkLabel:"Ligação",infNotSupportHtml5:"Seu navegador não suporta HTML5.",frmQrcodeCaption:"Digitalize o código bidimensional inferior para visualizar com o telemóvel."}];;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};; var pageEditor = {"setting":{"annoPlaying":"true","shoppingCartHTML":"false","shoppingCartOptinon":{"type":"PayPal","paypal":"","method":"POST","sandbox":"false","address":"","theme":"","body":"Hi xxx<br/>   I\'m going to buy below product(s):<br/>    ${shopping}<br/>Full Name","showPrice":"true","showTime":"true"}}, "pageAnnos":[[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoImage","annoId":"202613041416400","alpha":"1","mouseOverEffect":"0","borderColor":"16737792","Gifview":"-1","imgOriginalProportions":"true","imgScaleType":"false","location":{"tannoName":"image1","x":"-0.013420810313075507","y":"0.0017658960938257246","width":"1.0271732494012864","height":"0.9376769662851346","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"814.5","pageHeight":"1086"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","imgPosition":"","popUpImage":"false","frame":"frame0","colorMatrix":"original","imgScale":"1","imgRotation":"0","imgContX":"0","imgContY":"0","imgOriginalWidth":"240","imgOriginalHeight":"300","url":"https://zaryn.com.br/images/Video_Project.gif","originalURL":"null","effect":{"effectType":"null","triggerAction":"Note","duration":"1","position":"left"}}],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"202613041413508","alpha":"1","overColor":"16777215","downColor":"16777215","outColor":"16777215","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link1","x":"0.4638420406448903","y":"0.8423324367548707","width":"0.22368017188459177","height":"0.05121098672094601","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"814.5","pageHeight":"1086"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://unaerp.br","linkTarget":"_blank"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"202613041414083","alpha":"1","overColor":"16777215","downColor":"16777215","outColor":"16777215","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link2","x":"0.5745048625246357","y":"0.8229075797227876","width":"0.3202158250137314","height":"0.038849714064165944","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"814.5","pageHeight":"1086"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://www3.unaerp.br/ProcessoSeletivo/#/inscricao/tipo/1","linkTarget":"_blank"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"202613041413327","alpha":"1","overColor":"16777215","downColor":"16777215","outColor":"16777215","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link3","x":"0.09418112500403863","y":"0.8617572937869535","width":"0.3202158250137314","height":"0.035317921876514495","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"814.5","pageHeight":"1086"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://wa.me/5513991486186?text=Ol%C3%A1,%20vim%20pela%20revista%20looke%20e%20queria%20mais%20informa%C3%A7%C3%B5es","linkTarget":"_blank"}}],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"202613041412824","alpha":"1","overColor":"16777215","downColor":"16777215","outColor":"16777215","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link4","x":"0.04002697812671643","y":"0.7045925414364641","width":"0.40733336564246714","height":"0.08829480469128623","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"814.5","pageHeight":"1086"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://www.plantaoguaruja.com.br/","linkTarget":"_blank"}}],[],[],[],[],[],[],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"202613041415265","alpha":"1","overColor":"16777215","downColor":"16777215","outColor":"16777215","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link5","x":"0.48974185002100096","y":"0.9076705922264224","width":"0.19542583438338013","height":"0.04767919453329456","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"814.5","pageHeight":"1086"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://wa.me/5513991486186?text=Ol%C3%A1%20vim%20pela%20revista%20looke,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20","linkTarget":"_blank"}}],[],[],[],[],[],[],[],[],[],[]]}; bookConfig.isFlipPdf=false;
	bookConfig.hideMiniFullscreen=true;
	if(language&&language.length>0&&language[0]&&language[0].language){
		bookConfig.language=language[0].language;
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}