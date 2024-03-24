using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MyApp.Namespace
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "value1", "value2"};
        }

        // GET api/values/5
        [HttpGet("{id}")]            
        public ActionResult<string> Get(int id)
        {
            return $"value {id}";
        }

        // GET api/values/INtoCM/number
        [HttpGet("INtoCM/{id:double}")]
        public double INtoCM(double id)
        {
            return id*2.54;
        }

        // GET api/values/CMtoIN/number
        [HttpGet("CMtoIN/{id:double}")]
        public double CMtoIN(double id)
        {
            return id/2.54;
        }
    }
}

