using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using task_harbor.Data;
using task_harbor.Dto;
using task_harbor.Models;

namespace task_harbor.Controllers
{
    // https://localhost:xxxx/api/Tasks
    [Route("api/[controller]")]
    [ApiController]
    public class TaskNotesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public TaskNotesController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet("getAllTaskNotes")]
        public async Task<IActionResult> GetAllTaskNotes()
        {
            var taskNotes = await _context.TaskNotes.ToListAsync();
                
            return Ok(taskNotes);
        } 
          
        [HttpGet("getTaskNoteById/{id}")]
        public async Task<IActionResult> GetTaskNoteWithId(Guid id)
        { 
            var taskNote = await _context.TaskNotes.SingleOrDefaultAsync(x => x.Id == id);

            if (taskNote == null)
            {
                return BadRequest("Task not found.");
            }
                
            return Ok(taskNote);
        }
        
        [HttpPost("addNewTaskNote")]
        public async Task<IActionResult> AddNewTaskNote(TaskNoteDto taskNote)
        {
            var newTaskNote = new TaskNote
            {
                Id = taskNote.Id,
                Name = taskNote.Name,
                SerialNumber = GetNextSerial(),
            };

            await _context.TaskNotes.AddAsync(newTaskNote);

            await _context.SaveChangesAsync();

            var taskNoteDto = new TaskNoteDto
            {
                Id = newTaskNote.Id,
                Name = newTaskNote.Name,
                SerialNumber = newTaskNote.SerialNumber,
            };
                
            return Ok(taskNoteDto);
        }
        
        [HttpPut("updateTaskNote")]
        public async Task<IActionResult> UpdateTaskNote(TaskNoteDto taskNote)
        {
            var taskNotesToUpdate = await _context.TaskNotes.FindAsync(taskNote.Id);

            if (taskNotesToUpdate == null)
            {
                return BadRequest("Task cannot be found.");
            }

            taskNotesToUpdate.Id = taskNote.Id;
            taskNotesToUpdate.Name = taskNote.Name;
            taskNotesToUpdate.SerialNumber = taskNote.SerialNumber;

            await _context.SaveChangesAsync();

            return Ok();
        }

        [HttpDelete("deleteTaskNoteWithId/{id}")]
        public async Task<IActionResult> DeleteTaskNote(Guid id)
        {
            var taskNoteToDelete = await _context.TaskNotes.FindAsync(id);

            if (taskNoteToDelete == null)
            {
                return BadRequest("Task cannot be found.");
            }

            _context.TaskNotes.Remove(taskNoteToDelete);

            await _context.SaveChangesAsync();

            return Ok();
        }


        private int GetNextSerial()
        {
            var parameter = new SqlParameter("@result", System.Data.SqlDbType.Int);

            parameter.Direction = System.Data.ParameterDirection.Output;

            _context.Database.ExecuteSqlRaw("set @result = NEXT VALUE FOR TaskNotesSerialNumbers", parameter);

            var nextVal = (int)parameter.Value;

            return nextVal;
        }
    }
}
