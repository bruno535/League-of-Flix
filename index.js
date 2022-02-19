//nav black or none
setInterval(() => { 

    if(screen.width > 800){

        if(window.scrollY != 0){

            document.querySelector('#menu').style.backgroundColor = 'black'; 
        }
        else{

            document.querySelector('#menu').style.background = "linear-gradient(180deg, rgba(0,0,0,0.6642856971890319) 5%,rgba(0,0,0,0.4429971817828694) 50%, rgba(0,212,255,0) 100%)";
        }
    }
    if(screen.width < 800){

        document.querySelector('#menu').style.backgroundColor = 'black'; 
    }
}, 100);

//nav almentar
function navA(){

    if(document.querySelector('.navA').style.display == 'none'){

        document.querySelector('.navA1').style.display = 'block';
        document.querySelector('.navA2').style.display = 'block';
        document.querySelector('.navA3').style.display = 'block';
        document.querySelector('#menu').style.height = '30vh';
    }
    else{

        document.querySelector('.navA1').style.display = 'none';
        document.querySelector('.navA2').style.display = 'none';
        document.querySelector('.navA3').style.display = 'none';
        document.querySelector('#menu').style.height = '9vh';
    }    
} 

//imagem de inicio
function ImgInicio(){

    document.querySelector('.wallpaper').style.backgroundImage = 'url(./nomeLogo/wallpaper.jpg)'
    document.querySelector('.NomeLogo').src = './nomeLogo/logo.png';
    document.querySelector('.ChampH3').textContent = 'Veja skins dos mains';
    document.querySelector('.ChampP').textContent = 'Com skins dos champions que considero meus main(principais personagens), são do jogo League of Legends, um MMORPG que a anos continua bom.'
    document.querySelector('.maisInfo').href = 'https://www.leagueoflegends.com/pt-br/champions';
}


//trocar descriçao
function SwitchDes(champ){

    if(champ == 'Akali'){

        document.querySelector('.NomeLogo').src = './nomeLogo/'+champ+'.png';
        document.querySelector('.ChampH3').textContent = 'A Assassina Renegada';
        document.querySelector('.ChampP').textContent = 'Abandonando a Ordem Kinkou e seu título de Punho das Sombras, Akali agora ataca sozinha, pronta para ser a arma mortal que seu povo precisa. Embora ela mantenha tudo o que aprendeu com seu mestre Shen, ela se comprometeu a defender Ionia de seus inimigos, um assassinato de cada vez. Akali pode atacar em silêncio, mas sua mensagem será ouvida em voz alta e clara: “Temam a assassina sem mestre”.'
        document.querySelector('.maisInfo').href = 'https://www.leagueoflegends.com/pt-br/champions/'+champ.toLowerCase()+'/';
        document.querySelector('.wallpaper').style.backgroundImage ='url(./akali/'+champ+'_0.jpg)';
        document.querySelector('.skins').href = '#'+champ;
    }
    if(champ == 'Ezreal'){

        document.querySelector('.NomeLogo').src = './nomeLogo/'+champ+'.png';
        document.querySelector('.ChampH3').textContent = 'O Explorador Pródigo';
        document.querySelector('.ChampP').textContent = 'Um aventureiro arrojado, com um talento nato nas artes mágicas, Ezreal desbrava catacumbas soterradas, envolve-se com antigas maldições e supera com facilidade as situações mais improváveis. Sua coragem e ousadia não têm limites e ele prefere resolver as coisas no improviso, confiando parcialmente no seu talento, mas principalmente em sua mística luva shurimane, que ele usa para causar explosões arcanas devastadoras. Uma coisa é certa: quando Ezreal está por perto, lá vem problema. Ou lá vai. Ou já veio.'
        document.querySelector('.maisInfo').href = 'https://www.leagueoflegends.com/pt-br/champions/'+champ.toLowerCase()+'/';
        document.querySelector('.wallpaper').style.backgroundImage ='url(./ezreal/'+champ+'_0.jpg)';             
        document.querySelector('.skins').href = '#'+champ;              
    }
    if(champ == 'Katarina'){

        document.querySelector('.NomeLogo').src = './nomeLogo/'+champ+'.png';
        document.querySelector('.ChampH3').textContent = 'A Lamina Sinístra';
        document.querySelector('.ChampP').textContent = 'Decisiva em seus julgamentos e letal em combate, Katarina é a assassina de maior calibre de Noxus. Filha mais velha do lendário General Du Couteau, Katarina é reconhecida por seus assassinatos eficientes contra inimigos desavisados. Sua ambição ardente a levou a buscar alvos extremamente protegidos, mesmo correndo o risco de colocar seus aliados em perigo; mas não importa a missão, Katarina não hesita ao executar seu dever no meio de um furacão de adagas serrilhadas.'
        document.querySelector('.maisInfo').href = 'https://www.leagueoflegends.com/pt-br/champions/'+champ.toLowerCase()+'/';
        document.querySelector('.wallpaper').style.backgroundImage ='url(./katarina/'+champ+'_0.jpg)';             
        document.querySelector('.skins').href = '#'+champ;
    }
    if(champ == 'Leblanc'){

        document.querySelector('.NomeLogo').src = './nomeLogo/'+champ+'.png';
        document.querySelector('.ChampH3').textContent = 'A Farsante';
        document.querySelector('.ChampP').textContent = 'Misteriosa mesmo para os outros membros da Rosa Negra, LeBlanc é somente um dos muitos nomes de uma mulher pálida que tem manipulado pessoas e eventos desde os primeiros dias de Noxus. Usando sua magia para espelhar a si mesma, a feiticeira pode aparecer para qualquer um, em qualquer lugar e mesmo em vários lugares ao mesmo tempo. Sempre planejando às escondidas, as verdadeiras motivações de LeBlanc são tão inescrutáveis quanto sua identidade inconstante.'
        document.querySelector('.maisInfo').href = 'https://www.leagueoflegends.com/pt-br/champions/'+champ.toLowerCase()+'/';
        document.querySelector('.wallpaper').style.backgroundImage ='url(./leblanc/'+champ+'_0.jpg)';             
        document.querySelector('.skins').href = '#'+champ;                  
    }
    if(champ == 'Lux'){

        document.querySelector('.NomeLogo').src = './nomeLogo/'+champ+'.png';
        document.querySelector('.ChampH3').textContent = 'A Dama da Luz';
        document.querySelector('.ChampP').textContent = 'Luxanna Stemmaguarda nasceu em Demacia, um reino insular onde habilidades mágicas são vistas com medo e desconfiança. Capaz de dobrar a luz à sua vontade, ela cresceu temendo ser descoberta e exilada, e foi forçada a manter seus poderes em segredo a fim de preservar o status de nobreza de sua família. Apesar de tudo, o otimismo e resiliência de Lux a levaram a aceitar seus talentos únicos e agora ela os utiliza em segredo a serviço de sua terra natal.';
        document.querySelector('.maisInfo').href = 'https://www.leagueoflegends.com/pt-br/champions/'+champ.toLowerCase()+'/';
        document.querySelector('.wallpaper').style.backgroundImage ='url(./lux/'+champ+'_0.jpg)';       
        document.querySelector('.skins').href = '#'+champ;              
    }
    if(champ == 'Lulu'){

        document.querySelector('.NomeLogo').src = './nomeLogo/'+champ+'.png';
        document.querySelector('.ChampH3').textContent = 'A Fada';
        document.querySelector('.ChampP').textContent = 'A maga yordle Lulu é conhecida por conjurar ilusões de sonhos e criaturas fantasiosas enquanto vaga por Runeterra com seu silfo companheiro, Pix. Lulu transforma a realidade por capricho, distorcendo o que ela vê como restrições desse banal reino físico. Apesar de alguns considerarem sua magia no mínimo anormal, e no máximo perigosa, ela acredita que todos merecem um toque de encanto.';
        document.querySelector('.maisInfo').href = 'https://www.leagueoflegends.com/pt-br/champions/'+champ.toLowerCase()+'/';
        document.querySelector('.wallpaper').style.backgroundImage ='url(./lulu/'+champ+'_0.jpg)';       
        document.querySelector('.skins').href = '#'+champ;              
    }
    if(champ == 'Yasuo'){

        document.querySelector('.NomeLogo').src = './nomeLogo/'+champ+'.png';
        document.querySelector('.ChampH3').textContent = 'O Imperdoável';
        document.querySelector('.ChampP').textContent = 'Yasuo, um ioniano extremamente determinado, é também um ágil espadachim que usa o próprio ar como arma para enfrentar seus inimigos. Quando jovem, ele teve seu orgulho ferido ao ser acusado injustamente do assassinato de seu mestre — sem conseguir provar sua inocência, ele foi forçado a matar o próprio irmão para se defender. Até hoje, mesmo depois do verdadeiro assassino do seu mestre ter sido revelado, Yasuo ainda não consegue se perdoar e vaga por sua terra natal com apenas o vento para guiar sua espada.';
        document.querySelector('.maisInfo').href = 'https://www.leagueoflegends.com/pt-br/champions/'+champ.toLowerCase()+'/';
        document.querySelector('.wallpaper').style.backgroundImage ='url(./yasuo/'+champ+'_0.jpg)';       
        document.querySelector('.skins').href = '#'+champ;              
    }
    if(champ == 'Zed'){

        document.querySelector('.NomeLogo').src = './nomeLogo/'+champ+'.png';
        document.querySelector('.ChampH3').textContent = 'O Mestre das Sombras';
        document.querySelector('.ChampP').textContent = 'Absolutamente impiedoso e implacável, Zed é o líder da Ordem das Sombras; uma organização criada com a intenção de militarizar as tradições marciais e mágicas de Ionia para expulsar os invasores noxianos. Durante a guerra, o desespero o levou a libertar a forma secreta das sombras, uma magia espiritual malévola tão perigosa e manipuladora quanto poderosa. Zed dominou todas essas técnicas proibidas para destruir qualquer coisa que considerasse uma ameaça a sua nação, ou a sua nova ordem.';
        document.querySelector('.maisInfo').href = 'https://www.leagueoflegends.com/pt-br/champions/'+champ.toLowerCase()+'/';
        document.querySelector('.wallpaper').style.backgroundImage ='url(./zed/'+champ+'_0.jpg)';       
        document.querySelector('.skins').href = '#'+champ;              
    }
}


//trocar imagens ao clicar
function SwitchImg(champ,desc){

    SwitchDes(desc);

    if(desc == 'Akali'){

        
        document.querySelector('.wallpaper').style.backgroundImage ='url(./akali/'+champ+'.jpg)';
    }
    if(desc == 'Ezreal'){

        document.querySelector('.wallpaper').style.backgroundImage ='url(./ezreal/'+champ+'.jpg)';
    }
    if(desc == 'Katarina'){

        document.querySelector('.wallpaper').style.backgroundImage ='url(./katarina/'+champ+'.jpg)';
    }
    if(desc == 'Lux'){

        document.querySelector('.wallpaper').style.backgroundImage ='url(./lux/'+champ+'.jpg)';
    }
    if(desc == 'Leblanc'){

        document.querySelector('.wallpaper').style.backgroundImage ='url(./leblanc/'+champ+'.jpg)';
    }
    if(desc == 'Lulu'){

        document.querySelector('.wallpaper').style.backgroundImage ='url(./lulu/'+champ+'.jpg)';
    }
    if(desc == 'Yasuo'){

        document.querySelector('.wallpaper').style.backgroundImage ='url(./yasuo/'+champ+'.jpg)';
    }
    if(desc == 'Zed'){

        document.querySelector('.wallpaper').style.backgroundImage ='url(./zed/'+champ+'.jpg)';
    }

}
//backgroundColor Azul inicial
function Back(champ){

    document.querySelector('#'+champ).classList.add('backAzul');

    setTimeout(() => {

        document.querySelector('#'+champ).classList.remove('backAzul');
    }, 2500);
}
// ver imagem 100%
function mouseMove(event){

    document.querySelector('.box').style.display = 'none';
    document.querySelector('.navdiv').style.display = 'none';
    document.querySelector('.nomeEDescricao').style.marginLeft = '-1000px';
}
function mouseOut(){
    
    document.querySelector('.box').style.display = 'block';
    document.querySelector('.navdiv').style.display = 'flex';
    document.querySelector('.nomeEDescricao').style.marginLeft = '0';
}
