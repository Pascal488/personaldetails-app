import { useQuery } from "@apollo/client"
import { ME } from "../grapql/queries"





const useGetMe = () => {
       const { data,loading,error } = useQuery(ME, {
              notifyOnNetworkStatusChange: true,
            })
       
       return {
              user: data,
              isLoadingUserdata: loading,
              userFetchingError: error
       }
}


export default useGetMe