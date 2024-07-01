document.addEventListener('DOMContentLoaded', function() {
    const addTaskBtn = document.getElementById('add-task');
    const taskModal = document.getElementById('task-modal');
    const todoBtn = document.getElementById('todo-btn');
    const cancelBtn = document.getElementById('cancel-btn');
    const deleteBtn = document.getElementById('delete-btn');
    const repeatPromptBtn = document.getElementById('repeat-prompt-btn');
    const generateBtn = document.getElementById('generate-btn');
    const verificationWindow = document.getElementById('verification-window');
    const confirmDeleteBtn = document.getElementById('confirm-delete');
    const cancelDeleteBtn = document.getElementById('cancel-delete');
    const taskTypeRadios = document.getElementsByName('task-type');
    const staticTaskForm = document.getElementById('static-task-form');
    const aiTaskForm = document.getElementById('ai-task-form');
    const alertWindow = document.getElementById('alert-window');
    const alertOkBtn = document.getElementById('alert-ok');

    let currentTaskElement = null;
    let isEditMode = false;

    addTaskBtn.addEventListener('click', () => {
        openModal();
    });

    cancelBtn.addEventListener('click', () => {
        closeModal();
    });

    deleteBtn.addEventListener('click', () => {
        verificationWindow.style.display = 'block';
    });

    confirmDeleteBtn.addEventListener('click', () => {
        if (currentTaskElement) {
            currentTaskElement.remove();
        }
        verificationWindow.style.display = 'none';
        closeModal();
    });

    cancelDeleteBtn.addEventListener('click', () => {
        verificationWindow.style.display = 'none';
    });

    todoBtn.addEventListener('click', () => {
        const title = document.getElementById('task-title').value;
        const description = document.getElementById('task-description').value;
        if (title && description) {
            if (isEditMode) {
                updateTask(currentTaskElement, title, description);
            } else {
                createTask(title, description);
            }
            closeModal();
        }
    });

    repeatPromptBtn.addEventListener('click', () => {
        // Implement AI prompt repetition logic here
        console.log('Repeating AI prompt...');
    });

    generateBtn.addEventListener('click', () => {
        // Implement AI prompt generation logic here
        console.log('Generating AI prompt...');
    });

    taskTypeRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            if (e.target.value === 'static') {
                staticTaskForm.style.display = 'block';
                aiTaskForm.style.display = 'none';
                repeatPromptBtn.style.display = 'none';
            } else {
                staticTaskForm.style.display = 'none';
                aiTaskForm.style.display = 'block';
                repeatPromptBtn.style.display = 'inline-block';
            }
        });
    });

    function createTask(title, description) {
        const task = document.createElement('div');
        task.className = 'task';
        const now = new Date();
        const dateTimeString = `${now.getDate().toString().padStart(2, '0')}/${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getFullYear()} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
        task.innerHTML = `
            <h3>${title}</h3>
            <p>${description}</p>
            <div class="date-time">${dateTimeString}</div>
        `;
        task.addEventListener('click', () => openTaskModal(task));
        document.querySelector('#todo-column .task-list').appendChild(task);
        animateTask(task);
    }

    function updateTask(taskElement, title, description) {
        taskElement.querySelector('h3').textContent = title;
        taskElement.querySelector('p').textContent = description;
    }

    function openTaskModal(task) {
        currentTaskElement = task;
        isEditMode = true;
        const title = task.querySelector('h3').textContent;
        const description = task.querySelector('p').textContent;
        document.getElementById('task-title').value = title;
        document.getElementById('task-description').value = description;
        openModal();
        todoBtn.textContent = 'Edit';
        deleteBtn.style.display = 'inline-block';
    }

    function openModal() {
        taskModal.style.display = 'block';
        if (!isEditMode) {
            todoBtn.textContent = 'To Do!';
            deleteBtn.style.display = 'none';
            document.getElementById('task-title').value = '';
            document.getElementById('task-description').value = '';
        }
    }

    function closeModal() {
        taskModal.style.display = 'none';
        isEditMode = false;
    }

    function animateTask(task) {
        anime({
            targets: task,
            scale: [0, 1],
            opacity: [0, 1],
            duration: 500,
            easing: 'easeOutElastic(1, .8)'
        });
    }

    // Initialize dragula for drag and drop functionality
    dragula([
        document.querySelector('#todo-column .task-list'),
        document.querySelector('#inprogress-column .task-list'),
        document.querySelector('#done-column .task-list')
    ], {
        moves: function (el, container, handle) {
            return handle.tagName !== 'BUTTON'; // Prevent dragging from buttons
        }
    }).on('drop', function(el, target, source, sibling) {
        // Change task color based on the new column
        if (target.closest('#todo-column')) {
            el.style.backgroundColor = '#ffcccc';
        } else if (target.closest('#inprogress-column')) {
            el.style.backgroundColor = '#ffffcc';
        } else if (target.closest('#done-column')) {
            el.style.backgroundColor = '#ccffcc';
        }
        
        // Animate the task when it's dropped
        anime({
            targets: el,
            scale: [1.1, 1],
            duration: 300,
            easing: 'easeOutQuad'
        });
    });
});