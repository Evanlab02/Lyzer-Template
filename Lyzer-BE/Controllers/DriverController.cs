using Lyzer_BE.DTOs;
using Lyzer_BE.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Lyzer_BE.Controllers
{
    //TODO: Find a way to inject IDriverService using DriverService into DriverController

    [Route("api/driver")]
    [ApiController]
    public class DriverController : ControllerBase
    {
        private readonly IDriverService _driverService;
       
        public DriverController(IDriverService driverService)
        {
            _driverService = driverService;
        }

        // GET: api/driver/all
        [HttpGet("all")]
        public List<DriverDTO> Get()
        {
            return _driverService.GetDrivers();
        }

        // GET api/driver/5
        [HttpGet("{id}")]
        public DriverDTO? Get(int id)
        {
            return _driverService.GetDriverById(id);
        }
    }
}
