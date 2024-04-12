namespace task_harbor.Models
{
     public class TaskNote
    {
        public TaskNote()
        {
            Id = Guid.NewGuid();
        }

        public Guid Id { get; set; }
        public string? Name { get; set; }
        public int SerialNumber { get; set; }
    }
}

