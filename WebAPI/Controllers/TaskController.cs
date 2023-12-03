using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        private IConfiguration _configuration;

        public TaskController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpGet]
        [Route("GetTasks")]

        public IActionResult GetTasks() 
        {
            string query = "select * from dbo.Tasks";
            DataTable table = new DataTable();
            string sqlDatasource = _configuration.GetConnectionString("taskHarborAppDBConnection");
            SqlDataReader myReader;
            using(SqlConnection myConnection = new SqlConnection(sqlDatasource))
            {
                myConnection.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myConnection)) 
                { 
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myConnection.Close(); 
                }
            }

            return new JsonResult(table);

        }
    }
}
