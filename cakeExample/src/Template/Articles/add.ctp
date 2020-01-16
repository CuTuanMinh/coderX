<h1>Add Article</h1>
<p><?= $this->Html->link('Articles', ['action' => 'index']) ?></p>
<?php
echo $this->Form->create($article); // create form
// Hard code the user for now.
echo $this->Form->control('user_id', ['type' => 'hidden', 'value' => 1]); // create input
echo $this->Form->control('title'); // create input
echo $this->Form->control('slug');
echo $this->Form->control('body', ['rows' => '3']); // create input
echo $this->Form->control('tag', ['options' => $tags]);
echo $this->Form->button(__('Save Article'));
echo $this->Form->end();
?>      