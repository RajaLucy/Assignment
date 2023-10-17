
import java.util.*;
public class Main
{
    public static boolean checkpan(String s)
    {
      
        int n=s.length();
       
        int flag=1;
        for(int i=0;i<n;i++)
        {
           char c=s.charAt(i);
            if(!(Character.isAlphabetic(c)))
            {
                flag++;
            }
           
        }
        if(flag>1)
        {
            return false;
        }
        return true;
      
    }
	public static void main(String[] args) {
	    
	    Scanner s=new Scanner(System.in);
	    String st=s.next();
	    if(checkpan(st))
	    {
		System.out.println("Panagram");
	    }else{
	        	System.out.println("Not Panagram");
	    }
	}
}