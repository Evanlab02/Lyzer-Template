using Lyzer_BE.DTOs;

namespace Lyzer_BE.Services.Interfaces
{
    public interface IDriverService
    {
        public List<DriverDTO> GetDrivers();
        public DriverDTO GetDriverById(int id);
    }
}
