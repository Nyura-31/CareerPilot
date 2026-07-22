import java.util.HashMap;

public class ApplicationStatusCounter {

    public static void main(String[] args) {


        String[] statuses = {
                "Applied",
                "Interview",
                "Interview",
                "Offer",
                "Rejected"
        };


        HashMap<String,Integer> statusCount = new HashMap<>();


        for(String status : statuses){

            statusCount.put(
                status,
                statusCount.getOrDefault(status,0)+1
            );

        }


        System.out.println("Application Status Summary");


        for(String key : statusCount.keySet()){

            System.out.println(
                key + " : " + statusCount.get(key)
            );

        }

    }
}