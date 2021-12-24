import java.util.Scanner;
Scanner reader = new Scanner(System.in);

for(int i=0; i<9;i++){
     System.out.println('input two player names');
    String player1 = reader.next();
    String player2 = reader.next();
    CubeGame game = new CubeGame('Ofir','Yuval');
    boolean p1Higher = game.getDice1()>game.getDice2();
    if(p1Higher){
        System.out.print('roll:'+game.getDice1()+" player:"+ game.getPlayer1());
    }
    else{
        System.out.print('roll:'+game.getDice2()+" player:"+ game.getPlayer2());
    }
}