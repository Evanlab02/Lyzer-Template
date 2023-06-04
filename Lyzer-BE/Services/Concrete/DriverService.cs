using Lyzer_BE.DTOs;
using Lyzer_BE.Services.Interfaces;

namespace Lyzer_BE.Services.Concrete
{
    public class DriverService : IDriverService
    {
        //TODO: Find a way to inject IDriverService using DriverService into DriverController

        public List<DriverDTO> GetDrivers()
        {
            List<DriverDTO> drivers = new List<DriverDTO>();
            drivers.Add(new DriverDTO()
            {
                Id = 1,
                Name = "Max Verstappen",
                Constructor = "Red Bull Racing",
                Points = 170
            });
            drivers.Add(new DriverDTO()
            {
                Id = 2,
                Name = "Sergio Pérez",
                Constructor = "Red Bull Racing",
                Points = 117
            });
            drivers.Add(new DriverDTO()
            {
                Id = 3,
                Name = "Fernando Alonso",
                Constructor = "Aston Martin Aramco Cognizant",
                Points = 99
            });
            drivers.Add(new DriverDTO()
            {
                Id = 4,
                Name = "Lewis Hamilton",
                Constructor = "Mercedes AMG Petronas",
                Points = 87
            });
            drivers.Add(new DriverDTO()
            {
                Id = 5,
                Name = "George Russel",
                Constructor = "Mercedes AMG Petronas",
                Points = 65
            });
            return drivers;
        }

        public DriverDTO GetDriverById(int id)
        {
            return GetDrivers().First(x => x.Id == id);
        }
    }
}
