using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using task_harbor.Data;
using task_harbor.Dto;
using task_harbor.Models;

namespace task_harbor.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public UsersController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet("getAllUsers")]
        public async Task<IActionResult> GetAllUsers()
        {
            var users = await _context.Users.ToListAsync();

            return Ok(users);
        }

        [HttpGet("getUserById/{id}")]

        public async Task<IActionResult> GetUserById(Guid id)
        {
            var user = await _context.Users.SingleOrDefaultAsync(x => x.Id == id);

            if (user == null)
            {
                return BadRequest("User not found.");
            } 
            
              return Ok(user);    
        }

        [HttpPost("addNewUser")]
        public async Task<IActionResult> AddNewUser(UserDto user)
        {
            var newUser = new User
            {
                Username = user.Username,
                Email = user.Email,
                Password = user.Password,
            };

            await _context.Users.AddAsync(newUser);
            
            await _context.SaveChangesAsync();

            var newUserDto = new UserDto
            {
                Id= newUser.Id,
                Username = newUser.Username,
                Email = newUser.Email,
                Password = newUser.Password,
                Token = user.Token,
            };

            return Ok(newUserDto);
        }

        [HttpPut("updateUser")]
        public async Task<IActionResult> UpdateUser(UserDto user)
        {
            var userToUpdate = await _context.Users.FindAsync(user.Id);

            if (userToUpdate == null)
            {
                return BadRequest("User not found.");
            }

            userToUpdate.Username = user.Username;
            userToUpdate.Email = user.Email;
            userToUpdate.Password = user.Password;

            await _context.SaveChangesAsync();

            return Ok();
        }

        [HttpDelete("deleteUser/{id}")]
        public async Task<IActionResult> DeleteUser(Guid id)
        {
            var userToDelete = await _context.Users.FindAsync(id);

            if (userToDelete == null)
            {
                return BadRequest("User cannot be found.");
            }

            _context.Users.Remove(userToDelete);

            await _context.SaveChangesAsync();

            return Ok();
        }
    }
}
