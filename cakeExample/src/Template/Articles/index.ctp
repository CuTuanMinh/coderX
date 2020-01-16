<!-- <?php
	echo ("Hello");
?>

<table>
	<?php foreach ($articles as $article): ?>
		<tr>
			<td><?= $article->title ?></td>
			<td><?= $article->slug ?></td>
			<td><?= $article->body ?></td>
		</tr>
	<?php endforeach; ?>
</table> -->

<!-- http://localhost:8765/articles/index -->

<h1>Articles</h1>
<table>
<tr>
<th>Title</th>
<th>Action</th>
</tr>
<?php foreach ($articles as $article): ?>
<tr>
<td>
<?= $this->Html->link($article->title, ['action' => 'view', $article->id]) ?>
</td>
<td>
<?= $this->Html->link('Edit', ['action' => 'edit', $article->id]) ?><br>	
<?= $this->Form->postLink('Delete', ['action' => 'delete', $article->id], ['confirm' => 'Are you sure ?']) ?>
</td>
</tr>
<?php endforeach; ?>
</table>
<?= $this->Html->link('Add', ['action' => 'add']) ?>