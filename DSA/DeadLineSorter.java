import java.util.Arrays;
import java.util.Comparator;


class Application {

    String company;
    int deadline;


    Application(String company,int deadline){

        this.company = company;
        this.deadline = deadline;

    }

}


public class DeadlineSorter {


    public static void main(String[] args){


        Application[] applications = {

            new Application("Amazon",25),
            new Application("Google",5),
            new Application("Microsoft",15)

        };


        Arrays.sort(
            applications,
            Comparator.comparingInt(app -> app.deadline)
        );


        System.out.println(
            "Applications sorted by deadline"
        );


        for(Application app : applications){

            System.out.println(
                app.company + " - " + app.deadline + " Aug"
            );

        }

    }

}